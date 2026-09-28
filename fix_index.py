content = open('index.html', 'r', encoding='utf-8').read()
content = content.replace('src="/src/main.tsx"', 'src="/guiaoldenera/assets/index-JFHWhpGm.js"')
open('index.html', 'w', encoding='utf-8').write(content)
print('Done')