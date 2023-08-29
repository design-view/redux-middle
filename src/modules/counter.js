//액션타입, 액션생성함수, 리듀서
//액션타입
const INCREASE = "INCREASE";
const DECREASE = "DECREASE";

//액션생성함수
export const increase = () => ({type: INCREASE});
export const decrease = () => ({type: DECREASE});

//redux-thunk함수생성 
//리덕스에서 비동기 작업처리할때 사용하는 미들웨어 
export const increaseAsync = () => dispatch => {
    setTimeout(()=>dispatch(increase()),1000);
};

export const decreaseAsync = () => dispatch => {
    setTimeout(()=>dispatch(decrease()),1000);
}



//초깃값
const initialState = 0;

//리듀서
export default function counter(state=initialState, action){
    switch(action.type){
        case INCREASE:
            return state + 1;
        case DECREASE:
            return state - 1;
        default:
            return state;
    }
}