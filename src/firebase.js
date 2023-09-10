//firebase.js
import firebase from "firebase/compat/app"
import 'firebase/compat/firestore';
import firebaseConfig from "./firebaseConfig";

// firebaseConfig 정보로 firebase 초기화 및 시작
const app = firebase.initializeApp(firebaseConfig);

// firebase의 firestore 인스턴스를 변수에 저장
const firestore = app.firestore();

// 필요한 곳에서 사용할 수 있도록 내보내기
export { firestore };

  
