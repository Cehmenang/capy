const path = require('path')
const fs = require('fs')

const inputPath = path.join(__dirname, 'cedict_ts.u8')

const lines = fs.readFileSync(inputPath, 'utf-8').split('\n')

parsed=[]
for (const line of lines) {
  if (line.startsWith('#') || line.trim() === '') continue; // skip komentar dan baris kosong

  const match = line.match(/^(\S+)\s+(\S+)\s+\[(.+?)\]\s+\/(.+)\//);
  if (match) {
    const [_, traditional, simplified, pinyin, defs] = match;
    parsed.push({
      simplified,
      traditional,
      pinyin,
      definitions: defs.split('/').filter(Boolean)
    });
  }
}

const output = JSON.stringify(parsed, null, 2)
fs.writeFileSync('cedict.json', output, 'utf8');
