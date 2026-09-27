import os
for root, dirs, files in os.walk('src/data'):
    for f in files:
        if f.endswith('.ts'):
            path = os.path.join(root, f)
            with open(path, 'r', encoding='utf-8') as file:
                content = file.read()
            content = content.replace('src/assets/icons/', '/guiaoldenera/assets/icons/')
            with open(path, 'w', encoding='utf-8') as file:
                file.write(content)
            print('Updated:', path)