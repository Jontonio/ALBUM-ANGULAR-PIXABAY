import { VideoProperty } from './video.property';

export class Video {
    id        :number 
    pageURL   :string
    type      :string 
    tags      :string
    duration  :number 
    picture_id:string 
    views     : number
    downloads : number
    favorites : number
    likes     : number
    comments  : number
    user_id   : number
    user      : string
    userImageURL: string
    videos    : {
        'large' :VideoProperty,
        'medium':VideoProperty,
        'small' :VideoProperty,
        'tiny'  :VideoProperty
    }
}