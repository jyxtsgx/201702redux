import * as types from './action-types';
import $ from 'jquery';
export default {
    fetchWords(wd){
        return function(dispatch){
            dispatch({type:types.FETCH_WORDS});
            $.ajax({
                url:'http://www.baidu.com/su',
                data:{wd},
                jsonp:'cb',
                dataType:'jsonp',
                context:this,//指定回调函数中的this指针
                success(result){
                    dispatch({type:types.FETCH_WORDS_SUCCESS,words:result.s});
                }
            })
        }
    }
}