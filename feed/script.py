from datetime import datetime, UTC
import markdown
import os


URL = "https://alipascal.github.io/alicia.tchemo"


# Extract html content from every .md file in feed/articles/ folder
updated_date = datetime.now(UTC).strftime('%Y-%m-%dT%H:%M:%S+00:00')
articles = []
folder = "articles"

for racine, dirs, fichiers in os.walk(folder):

    for f in fichiers:
        path = os.path.join(racine, f)
        with open(path, "r", encoding="utf-8") as input_file:
            text = input_file.read()
            html = markdown.markdown(text)

            filename = f.replace(".md", "")
            articles.append({  
                "filename": filename,
                "content": html,
                "title": text.splitlines()[0].lstrip("# ").strip(),
                "published_date": "",
                "updated_date": updated_date,
                "url": URL + "/" + filename,
            })


# Create file
my_name = "pascal"

# Create entries from articles
entries = [f"""
    <entry>
    <title>{item["title"]}</title>
    <link href="{item["url"]}" />
    <id>{item["url"]}</id>
    <updated>{item["updated_date"]}</updated>
    <published>{item["published_date"]}</published>
    <content type="html">
        {item["content"]}
    </content>
    </entry>
""" for item in articles]


# Create the RSS
rss = f"""
    <?xml version="1.0" encoding="utf-8"?>
    <feed xmlns="http://www.w3.org/2005/Atom">
        <title>{my_name}</title>
        <subtitle>Flux RSS/Atom articles de alipascal</subtitle>
        <link href="{URL}"/>
        <updated>{updated_date}</updated>
        <author>
            <name>{my_name}</name>
        </author>
        <id>{URL}</id>
        {" ".join(entries)}
    </feed>
"""


with open("feed.xml", "w", encoding="utf-8") as f:
    f.write(rss)
