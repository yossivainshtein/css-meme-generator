import { makeAutoObservable } from "mobx"
import boyfriendImage from '../images/Distracted-Boyfriend.jpeg'
export class CssProp {
    
    public prop: string
    public value: string
    public is_active: boolean

    constructor(prop: string, value: string) {
        makeAutoObservable(this)
        this.prop = prop
        this.value = value
        this.is_active = true
    }
}

export class MemeTag {
    text: string
    css: Array<CssProp>

    constructor(text: string, style: React.CSSProperties) {
        makeAutoObservable(this)
        this.text = text
        this.css = Object.entries(style).map(([prop, value]) => new CssProp(prop, value))
    }

    setText(text: string) {
        this.text = text
    }
}

export class MemeTemplate {
    image_url: string
    tags: MemeTag[]

    constructor(image_url: string, tags: MemeTag[]) {
        makeAutoObservable(this)

        this.image_url = image_url
        this.tags = tags
    }
}

export const boyfriendTemplate = new MemeTemplate(boyfriendImage, 
    [
        new MemeTag('usa', { left: '23%', top: '72%' }),
        new MemeTag('corona virus', { left: '47%', top: '50%' }),
        new MemeTag('china', {  left : '75%', top: '65%' ,color: 'red'}),
    ]
)
 

export interface WithMemeTemplate {
    template: MemeTemplate
}

export interface WithMemeTag {
    tag: MemeTag
}
  