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


const RATE = 0.75;
export async function captcha(recaptcha, SITE_KEY) {
  try {
    await recaptcha.execute(SITE_KEY, {action: 'submit'}).then(token => {
      let formData = new FormData();
      formData.append("g-recaptcha-response", token);
      fetch('https://icustomstitch-form2-v5e54zv6aa-uc.a.run.app/verify', {
        method: 'POST',
        body: formData
      }).then(res => res.json()).then(res => {
        if (res.score < RATE)
          throw Error('Captcha failed. Try again later, or email us directly.')
        return 1;
      });
    });
  } catch (e) {
    alert("Something went wrong with captcha");
    return -1;
  }
}
