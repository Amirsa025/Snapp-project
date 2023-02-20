import {IVendorState} from "./VendorState";
import callApi from "../../../helper/callApi";
import {IVendor} from "../../../model/Ivendors";

const initialState: IVendorState = {
    status: "",
    hasMore:true,
    contactCollection: [],
    error: {},
};
export default function VendorListReducer(state = initialState, action){
    switch (action.type){
        case 'GetIVendorList': {
            let setHasMore;
            if(action.payload !== undefined){
                setHasMore = action.payload.length !== 0
            } else {
                setHasMore = false
            }
            return {
                ...state,
                hasMore:setHasMore,
                contactCollection : state.hasMore !== true ? state.contactCollection : state.contactCollection.concat(action.payload)
            }
        }
        default :
            return state
    }
}


export function GetVendorsList(page){
    return async function getVendorForCardsThunk(dispatch){
        const params = { page:page,pageSize:10}
        const response = await callApi().get<Array<IVendor>>(`/vendors-list?page_size=10&lat=35.754&long=51.328`,{params:params});
        if(response){
            dispatch({type:'GetIVendorList',payload:response.data})
        }
    }
}
