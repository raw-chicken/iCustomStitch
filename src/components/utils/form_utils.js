function readFileAsync(file) {
  return new Promise((resolve, reject) => {
    let reader = new FileReader();

    reader.onload = () => {
      resolve(reader.result);
    };

    reader.onerror = reject;

    reader.readAsDataURL(file);
  })
}

export function readFiles(files) {
  return new Promise(function (resolve, reject) {
    let data = [];
    const promises = files.map(async file => {
      try {
        const routes = await readFileAsync(file);
        data.push(routes);
      } catch (error) {
        console.log(error);
      }
    });
    Promise.all(promises)
      .then(() => {
        resolve(data)
      })
  })
}

const sizes = ['B', 'KB', 'MB', 'GB', 'TB', 'PB'];
export function convert(bytes) {
  let unit = 0;
  while (bytes > 512) {
    bytes /= 1024
    unit++;
  }
  return bytes.toFixed(1) + " " + sizes[unit];
}
