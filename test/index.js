class PageIndex extends Orchestrator.OrchestratorPageModel{
    OnInit(args, e){
        console.log("=> Init page");
        console.log(args)
        console.log(e)
    }
    OnPageRenderChange(mode) { 
        console.log("view mode page change")
        console.log(mode) 
    }
    PageCustomMethod(e){
        console.log("metodo custom nella pagina")
    }
}

class PageIndexComponent1 extends Orchestrator.OrchestratorPageComponentModel{

    number = 0;

    OnInit(args){
        console.log("=> Init component 1");
        console.log(args)
    }
    OnComponentRenderChange(mode) { 
        console.log("view mode component 1 change")
        console.log(mode) 
    }
    ComponentCustomMethodGet(e){
        //console.log("metodo custom del componente 1 get")
        //console.log(this.number)

        return this.number;
    }
    ComponentCustomMethodSet(e){
        //console.log("metodo custom del componente 1 set")
        this.number += 1;
    }
}

class PageIndexComponent2 extends Orchestrator.OrchestratorPageComponentModel{
    OnInit(){
        console.log("=> Init component 2");
    }
    OnComponentRenderChange(mode) { 
        console.log("view mode component 2 change")
        console.log(mode) 
    }
    ComponentCustomMethodGet(e){
        //console.log("metodo custom del componente 2")
    }
}