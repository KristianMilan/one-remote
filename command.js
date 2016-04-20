export default {
  send(device, key) {
    fetch('http://192.168.1.109:2346/command', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        device,
        key,
        type: 'SEND_ONCE'
      })
    })
      .then((response) => response.text())
      .then((responseText) => {
        console.log(responseText);
      })
      .catch((error) => {
        console.warn(error);
      });
  }
};