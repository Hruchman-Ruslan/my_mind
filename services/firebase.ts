import { initializeApp, getApps } from 'firebase/app'

export default function initFirebase() {
	try {
		if (getApps().length === 0) {
			const firebaseApp = initializeApp({
				apiKey: 'FAKE_API_KEY',
				authDomain: 'fake-app.firebaseapp.com',
				projectId: 'fake-project-id',
				storageBucket: 'fake-app.appspot.com',
				messagingSenderId: '0000000000',
				appId: '1:0000000000:web:fakeappid123456',
			})
			console.log('Firebase initialized:', firebaseApp.name)
		} else {
			console.log('Firebase already initialized')
		}
	} catch (error) {
		console.error('Firebase init error:', error)
	}
}
