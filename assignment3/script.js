//console.log('hello')

function changeHeading (name, font, fontsize, color) {
	document.getElementById('heading').style.backgroundColor=color;
	document.getElementById('heading').innerHTML=name;
	document.getElementById('heading').style.fontFamily=font;
	document.getElementById('heading').style.fontSize=fontsize;
}
function changeBody (color) {
	document.body.style.backgroundColor=color;
	document.getElementById('heading').style.backgroundColor=color;
	document.getElementById('p1').style.position='relative';
	document.getElementById('p1').style.left='480px';
	document.getElementById('p1').style.zIndex='10';
	document.getElementById('p2').style.position='relative';
	document.getElementById('p2').style.left='120px';
	document.getElementById('p2').style.zIndex='10';
	document.getElementById('p3').style.position='relative';
	document.getElementById('p3').style.left='860px';
	document.getElementById('p3').style.zIndex='10';
	document.getElementById('p4').style.position='relative';
	document.getElementById('p4').style.left='220px';
	document.getElementById('p4').style.zIndex='10';
	document.getElementById('subheading').style.textAlign='right';
}
function changeText (width, color) {
	document.getElementById('allthetext').style.width=width;
	document.body.style.backgroundColor=color;
	//alert('this is working?');
}
function changeWidth (width) {
	document.getElementById('quote').style.width=width;
	document.getElementById('quote').style.fontSize='30px';
	document.getElementById('quote').style.fontFamily='didot';
}
function changeSubheading (word) {
	document.getElementById('subheading').innerHTML=word;
}
function changeParagraphs (font, color) {
	document.getElementById('p1').style.fontFamily=font;
	document.getElementById('p1').style.color=color;
	document.getElementById('p2').style.fontFamily=font;
	document.getElementById('p2').style.color=color;
	document.getElementById('p3').style.fontFamily=font;
	document.getElementById('p3').style.color=color;
	document.getElementById('p4').style.fontFamily=font;
	document.getElementById('p4').style.color=color;
	document.getElementById('subheading').innerHTML='now doubleclick!';
}
function addImage () {
	var img=document.createElement('img');
	img.src='weaving.jpg';
	img.style.position='absolute';
	img.style.top='125px';
	img.style.left='10px';
	img.style.zIndex='1';
	document.body.appendChild(img);
	document.getElementById('subheading').innerHTML='tension';
}
function addImage2 () {
	var gif=document.createElement('img');
	gif.src='planes.gif';
	gif.style.position='absolute';
	gif.style.top='827px';
	gif.style.left='-100px';
	gif.style.width='500px';
	gif.style.height='400px';
	gif.style.zIndex='1';
	document.body.appendChild(gif);
}
function addImage3 () {
	var img2=document.createElement('img');
	img2.src='matrix.jpg';
	img2.style.position='absolute';
	img2.style.top='425px';
	img2.style.left='670px';
	img2.style.width='700px';
	img2.style.height='500px';
	img2.style.zIndex='1';
	document.body.appendChild(img2);
}
function addDocumentation () {
	var div=document.createElement('div');
	div.innerHTML='Hello! This is my documentation for this <br> weeks assignment. I was actually really excited <br> to start using javascript and I had a lot of fun <br> doing this weeks assignment~ <br><br> Scroll up to see some notes I made while <br> I was coding this!';
	div.style.position='absolute';
	div.style.top='1100px';
	div.style.left='500px';
	div.style.backgroundColor='white';
	document.body.appendChild(div);
	var div2=document.createElement('div');
	div2.innerHTML='I wanted my page to change as the user <br> interacts with it by following the changing <br> prompts. As a little nod to the title, when <br> you hover over it, it prints in binary!';
	div2.style.position='absolute';
	div2.style.top='200px';
	div2.style.left='1050px';
	div2.style.backgroundColor='white';
	document.body.appendChild(div2);
	var div3=document.createElement('div');
	div3.innerHTML='By adding the pictures behind the body text but <br> over the quote, I wanted to play with ~3D space~ <br> I did a quick google search on how to append images <br> which was nice and simple. I tried to relate the images <br> to the text as much as possible';
	div3.style.position='absolute';
	div3.style.top='690px';
	div3.style.left='890px';
	div3.style.backgroundColor='white';
	div3.style.zIndex='9';
	document.body.appendChild(div3);
}