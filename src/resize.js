
export default function resize() {
    var screenconfig = document.head.getElementsByTagName('style')[1];
    var confs = screenconfig.innerText.split(';')
    confs[30] = `\n\t--height-control:calc(16*${window.innerHeight}/(9*${window.innerWidth}))`
    screenconfig = confs.join(';')
    document.head.getElementsByTagName('style')[1].innerHTML = screenconfig
  };