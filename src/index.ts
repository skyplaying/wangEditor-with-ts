import E from 'wangeditor'
// import { DropListConf, DropListItem, PanelTabConf, PanelConf, TooltipConfItemType } from 'wangeditor'

const { $, BtnMenu, DropListMenu, PanelMenu, DropList, Panel, Tooltip } = E
console.log($, BtnMenu, DropListMenu, PanelMenu, DropList, Panel, Tooltip)

const editor = new E('#editor')
editor.config.onchange = (newHtml: any) => {
    let content: HTMLElement = document.getElementById('content') as HTMLElement
    content.innerHTML = newHtml
}

editor.create()

let btnHtml: HTMLElement = document.getElementById('html') as HTMLElement
btnHtml.addEventListener('click',function(){
    alert(editor.txt.html())
})

let btnText: HTMLElement = document.getElementById('text') as HTMLElement
btnText.addEventListener('click',function(){
    alert(editor.txt.text())
})

// 自定义菜单，参考文档 http://www.wangeditor.com/doc/pages/11-%E8%87%AA%E5%AE%9A%E4%B9%89%E6%89%A9%E5%B1%95%E8%8F%9C%E5%8D%95/01-%E5%BF%AB%E9%80%9F%E6%89%A9%E5%B1%95%E4%B8%80%E4%B8%AA%E8%8F%9C%E5%8D%95.html
