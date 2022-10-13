const fsExtra = require('fs-extra');
const { writeJson } = require('fs-extra');
const input_path = './in/';
const output_path = './out1/';
const description = "Girles NFT Are A Group Of 1000 Uniquely Designed And Generated Collectibles On The Ethereum Blockchain.";

if (!fsExtra.existsSync(output_path)) {
  fsExtra.mkdirSync(output_path);
}

for (let i = 0; i < 10000; i++) {
  fsExtra.readJson(`${input_path}${i+1}.json`, (error, data) => {
    if (error) {
      console.log('An error has occurred when reading json');
      return;
    }
    let newData = {
      name: data.name,
      description: description,
      image: `https://sapphire-decent-kingfisher-144.mypinata.cloud/ipfs/QmWzjPBLZCNFTFRGH2jktmcmcgHgdrsYcgVhMSE84G14j6/${i+1}.png`,
      dna: data.dna,
      edition: data.edition,
      date: data.date,
      attributes: data.attributes
    };

    let obj = new Object();
    obj.name = data.name;
    obj.description = description;
    obj.image = `https://sapphire-decent-kingfisher-144.mypinata.cloud/ipfs/QmWzjPBLZCNFTFRGH2jktmcmcgHgdrsYcgVhMSE84G14j6/${i+1}.png`;
    obj.dna = data.dna;
    obj.edition = data.edition;
    obj.date = data.date;
    obj.attributes = data.attributes;

    var string = JSON.stringify(obj);
    console.log(JSON.parse(string));

    writeJson(`${output_path}${i+1}.json`, JSON.parse(string), (error) => {
      if (error) {
        console.log('An error has occurred when writing json');
        return;
      }
      console.log(`${output_path}${i+1}.json written to file successfully!`);
    });
  });
}

