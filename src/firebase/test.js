import firebase from 'firebase/app';
import 'firebase/firestore';

const firestore = firebase.database();


firestore.collection('users').doc('bUfzfuJGtDlQFbXpESVd').collection('cartItems').doc('YHyAUkEekDXvySd5ajGP');
firestore.doc('/users/bUfzfuJGtDlQFbXpESVd/cartItems/YHyAUkEekDXvySd5ajGP')
firestore.collection('/users/bUfzfuJGtDlQFbXpESVd/cartItems');