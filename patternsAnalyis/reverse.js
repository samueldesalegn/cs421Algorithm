function reverse(str) {
	if (str.length === 1) return str.charAt(0);
	return reverse(str.slice(1)) + str.charAt(0);
		
	
}


console.log(reverse('awesome')) // 'emosewa'
console.log(reverse('rithmschool')) // 'loohcsmhtir'