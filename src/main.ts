import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		headerText: 'HELLO, I AM MATEUS',
		age: 20,
		isMale: true,
	}
});

export default app;