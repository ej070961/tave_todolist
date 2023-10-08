import {firestore} from './firebase'

export async function findUser(uid){
    const users = firestore.collection("users"); 

    try {
        const snapshot = await users.where("Uid", "==", uid).get();
    
        if (snapshot.size > 0) {
          const userData = snapshot.docs.map(doc => doc.data())[0]
          console.log(userData);
          return userData;
        } else {
            console.log("user 정보가 저장되어 있지 않습니다")
            return false;
        }
      } catch (error) {
        console.log(error);
        throw error; // 오류를 호출한 곳으로 다시 던집니다.
      }
}

export async function saveUser(userdata){

    const users = firestore.collection("users");
    try{
        await users.doc(userdata.Uid).set(userdata)
        return "success"
    }catch(error){
        console.log(error);
        throw error;
    }


}