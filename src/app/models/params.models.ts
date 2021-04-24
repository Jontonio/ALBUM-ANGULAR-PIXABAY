
export class Params{

    q:string;
    key:string;
    image_type:string;
    per_page:string;
    page:string;

    constructor(PQ:string, pKey:string, pImage_type:string, pPer_page:string, pPage:string ){
        this.q = PQ 
        this.key = pKey 
        this.image_type = pImage_type 
        this.per_page = pPer_page 
        this.page = pPage 
    }

    // modificadores
    setQ(pq:string){
        this.q = pq;
    }
    setKey(pkey:string){
        this.key = pkey;
    }
    setImageType(pImage_type:string){
        this.image_type = pImage_type;
    }
    setPerPage(pPer_page:string){
        this.per_page = pPer_page;
    }
    setPage(pPage:string){
         this.page = pPage;
    }
    // selectores
    getQ():string{
        return this.q;
    }
    getKey():string{
        return this.key;
    }
    getImageType():string{
        return this.image_type;
    }
    getPerPage():string{
        return this.per_page;
    }
    getPage():string{
        return this.page;
    }

    get params(){
        return{
            q: this.getQ(),
            key: this.getKey(),
            image_type: this.getImageType(),
            per_page: this.getPerPage(),
            page: this.getPage()
        }
    }
    //aumentar numero de paginas
    page_plus(){
        this.page = (parseInt(this.page) + 1).toString();
        if(parseInt(this.page)==5){
            console.log('limitemaximo')
        }
    }

}