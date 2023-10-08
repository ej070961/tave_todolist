import {firestore} from './firebase'

export async function saveTodo(data){

    const todos = firestore.collection("todos");
    try{
        await todos.doc().set(data)
        
    }catch(error){
        console.log(error);
        throw error;
    }

}

export async function findallTodo(data){

    const todos = firestore.collection("todos");
    const result = [] // 데이터를 저장할 배열 
    try{
        const query = todos.where('Uid', '==', data.uid).where('Time', '==', data.time);
        const snapshot = await query.get();

        if(!snapshot.empty){
            snapshot.forEach((doc)=>{
                const data = doc.data();
                console.log(data);
                result.push(data);
            })
            return result; //배열 리턴
        }else{
            return [];
        }
    }catch(error){
        console.log(error);
        throw error;
    }
}