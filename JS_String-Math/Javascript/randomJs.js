function randomQuote()
{
	var quotes=["\"The moment you think you understand a great work of art, it's dead for you.\" -- Robert Wilson",
	"\"To love one person with a private love is poor and miserable; to love all is glorious.\" --Thomas Traherne",
	"\"Every time history repeats itself the price goes up.\"--Anonymous",
	"\"Every violation of truth is not only a sort of suicide in the liar, but is a stab at the health of human society.\" -- Ralph Waldo Emerson",
	"\"Great innovations should not be forced on slender majorities.:\" - Thomas Jefferson"];
	document.write(quotes[Math.floor((Math.random()*10)%5)]);
}