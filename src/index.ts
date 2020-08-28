import wangeditor from '@wangeditor-team/we-next'

const editor = new wangeditor('#editor')
editor.config.onchange = (newHtml: any) => {
    let content: HTMLElement = document.getElementById('content') as HTMLElement
    content.innerHTML = newHtml
}

editor.create()

let btnHtml: HTMLElement = document.getElementById('html') as HTMLElement
btnHtml.addEventListener('click',function(){
    Promise.resolve().then(()=>{
        alert(editor.txt.html())
    })
})
btnHtml.click

let btnText: HTMLElement = document.getElementById('text') as HTMLElement
btnText.addEventListener('click',function(){
    Promise.resolve().then(()=>{
        alert(editor.txt.text())
    })
})
btnText.click

