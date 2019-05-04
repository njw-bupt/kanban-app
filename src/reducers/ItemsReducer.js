export const ItemsReducer = (state,action) => {
    if(!state){
        return {
            // items: [
            //     {title:"read1 a book every week",description:"There are moments in life when you miss someone so much that you just want to pick them from your dreams and hug them for real! Dream what you want to dream; go where you want to go; be what you want to be, because you have only one life and one chance to do all the things you want to do.",stage:"Todo"},
            //     {title:"read2 a book every week",description:"May you have enough happiness to make you sweet, enough trials to make you strong, enough sorrow to keep you human, enough hope to make you happy? Always put yourself in others’shoes. If you feel that it hurts you, it probably hurts the other person, too",stage:"Todo"},
            //     {title:"read3 a book every week",description:"The happiest of people don’t necessarily have the best of everything; they just make the most of everything that comes along their way. Happiness lies for those who cry, those who hurt, those who have searched, and those who have tried, for only they can appreciate the importance of people",stage:"Doing"},
            //     {title:"read4 a book every week",description:"who have touched their lives. Love begins with a smile, grows with a kiss and ends with a tear. The brightest future will always be based on a forgotten past, you can’t go on well in lifeuntil you let go of your past failures and heartaches.",stage:"Done"},
            // ],
            items:[],
            themeColor: "#032"
        }
    }
    switch(action.type){
        case "INIT_STATE":
            return{
                ...state,
                items: action.data
            }
        case "CHANGE_COLOR":
            return {
                ...state,
                themeColor: action.color
            }
        case "MOVE":
            let target = {...state.items[action.index]};
            let next_stage = target.stage==="Todo"?"Doing":"Done";
            target.stage = next_stage;
            return {
                ...state,
                items: [...state.items.slice(0,action.index),target,...state.items.slice(action.index+1)]
            }
        case "DELETE":
            return{
                ...state,
                items: [...state.items.slice(0,action.index),...state.items.slice(action.index+1)]
            }
        case "ADD":
            return{
                ...state,
                items: [...state.items, action.item]
            }
        default:
            break;
    }
}