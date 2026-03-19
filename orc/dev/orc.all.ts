export { OrchestratorViewMode } from "./models/orc.enum";
export { OrchestratorPageModel, OrchestratorPageComponentModel } from "./models/orc.abstractions";

import { OrchestratorViewMode } from "./models/orc.enum";
import { PageRegistration, PageRenderChange } from "./managers/orc.page"
import { PageComponentRegistration, PageAllComponentsRenderChange } from "./managers/orc.components"
import { CallMethod, CallAllMethod, GetOrchestratorInstanceValue } from "./managers/orc.call"



function PageRender(mode : OrchestratorViewMode){
    PageRenderChange(mode);
    PageAllComponentsRenderChange(mode);
}


export {
    PageRegistration,
    PageRender,
    PageComponentRegistration,
    CallMethod,
    CallAllMethod,
    GetOrchestratorInstanceValue
}



