import {firestore} from './firebase'

export async function saveTodo(data){

    const todos = firestore.collection("todos").doc();
    try{
        let todoData = {
            TodoId: todos.id,
            ...data
          };
        await todos.set(todoData);
        return todoData;
        
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
                // console.log(data);
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

export async function updateCompleted(todoId, completed){

    const todo = firestore.collection("todos").doc(todoId);
    
    try{
  
        await todo.update({Completed: completed});
        console.log("Document successfully updated!")
        
    }catch(error){
        console.log(error);
        throw error;
    }
}

export async function deleteItem(todoId){

    const todo = firestore.collection("todos").doc(todoId);
    
    try{
  
        await todo.delete();
        console.log("Document successfully deleted!")
        
    }catch(error){
        console.log(error);
        throw error;
    }
}

export async function countTodo(data){

    const todos = firestore.collection("todos");

    try{
        const query1 = todos.where('Uid', '==', data.uid).where('Time', '==', data.time.v).where('Completed', '==', true);
        const query2 = todos.where('Uid', '==', data.uid).where('Time', '==', data.time.v).where('Completed', '==', false);
        const snapshot1 = await query1.get();
        const snapshot2 = await query2.get();
        let todoDone;
        let todoNotDone;

        if(!snapshot1.empty){
            todoDone= snapshot1.size; 

        }else{
            todoDone = 0;
        }

        if(!snapshot2.empty){
            todoNotDone= snapshot2.size;
        }else{
            todoNotDone=0;
        }

        return {todoDone, todoNotDone};
    }catch(error){
        console.log(error);
        throw error;
    }
}