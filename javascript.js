var quotes = [
	'\"Driver picks the music, shotgun shuts his cake hole.\" <br> - Dean Winchester (S01E01 - Pilot)',
	'\"Dude, you fugly.\" <br> - Dean Winchester (S01E11 - Scarecrow)',
	'\"You better take care of that car or I swear I\'ll haunt your ass!\" <br> - Dean Winchester (S01E12 - Faith)',
	'\"The answer to your question can best be expressed in a series of partial differential equations.\" <br> - Castiel (S06E18 - Frontierland)',
	'\"I\'m not going to die in a hospital where the nurses aren\'t even hot.\" <br> - Dean Winchester (E01E12 - Faith)',
	'Sam: \"Why\'d you let me fall asleep?\" <br> Dean: \"Because I\'m an awesome brother. So, what\'d you dream about?\" <br> Sam: \"Lollipops and candy canes.\" <br> - Sam and Dean Winchester (S01E05 - Bloody Mary)',
	'\"I hope your apple pie is freakin\' worth it!\" <br> - Dean Winchester',
	'\"My name is Dean Winchester. I\'m an Aquarius. I enjoy sunsets, long walks on the beach, and frisky women. I did not kill anyone.\" <br> - Dean Winchester (S02E07 - The Usual Suspects)',
	'\"What do you wanna do, poke her with a stick? Dude! You\'re not gonna poke her with a stick!\" <br> - Sam Winchester (S02E11 - Playthings)',
	'Dean: \"Did you use protection?\" <br> Castiel: \"I had my angel blade.\" <br> - Dean Winchester and Castiel (S10E22 - The Prisoner)',
	'\"We\'re not working for the Mandroid!\" <br> - Sam Winchester (S02E12 - Nightshifter)',
	'\"I like him; he says \'okie-dokie\'.\" <br> - Dean Winchester (S02E12 - Nightshifter)',
	'\"\'Spent it on ammo.\" <br> - John Winchester (S01E20 - Dead Man\'s Blood)',
	'Sam: \"Hey, there\'s salt over there. Right beside the door.\" <br> Dean: \"You mean like protection-againt-demons-salt? Or oops-I-spilled-the-popcorn-salt?\" <br> - Sam and Dean Winchester (S01E20 - Dead Man\'s Blood)',
	'Sam: \"Dean, there\'s ten times as much lore about angels as there is about anything else we\'ve ever hunted.\" <br> Dean: \"Yeah, you know what? There\'s a ton of lore on unicorns too. In fact, I hear that they ride on silver moonbeams and they shoot rainbows out of their ass!\" <br> Sam: \"Wait, there\'s no such thing as unicorns?\" <br> - Sam and Dean Winchester (S02E13 - Houses of the Holy)',
	'Sam:\"Dude. I\'ll admit we\'ve gone fast and loose with spellwork before, but this takes the cake. I mean, A Spongebob placemat instead of an altar cloth?\" <br> Dean: \"...We\'ll just put it Spongebob side down.\" <br> - Sam and Dean Winchester (S02E13 - Houses of the Holy)',
	'\"Dean, this is a very serious investigation. We don\'t have any time for any of your blah blah blah blah.\" <br> - Sam Winchester (S02E15 - Tall Tales)',
	'Bobby: \"You\'re bickering like an old married couple.\" <br> Dean: \"No, see, married couples can get divorced. Me and him? We\'re like, Siamese twins.\" <br> Sam: \"It\'s conjoined twins.\" <br> Dean: \"See what I mean?\" <br> - Bobby Singer, Sam, and Dean Winchester (S02E15 - Tall Tales)',
	'\"Oh I\'m sure he has. It\'s just your standard haunted campus, alien abduction, and alligator in a sewer gig.\" <br> - Dean Winchester (S02E15 - Tall Tales)',
	'Sam: \"How would you feel if I screwed up the Impala?\" <br> Dean: \"Would be the last thing you\'d do.\" <br> - Sam and Dean Winchester (S02E15 - Tall Tales)',
	'\"Look, man, I- I know that all this has to be so hard. <br> But, I want to know... I\'m here for you. <br> You brave little soldier. I acknowledge your pain. <br> C\'mere. <br> <b>Too precious for this world</b>.\" <br> - Sam Winchester (S02E15 - Tall Tales)',
	'Dean:\"What\'s wrong with my food?\" <br> Sam: \"It\'s not food anymore, Dean. It\'s Darwinism!\" <br> - Sam and Dean Winchester (S02E15 - Tall Tales)',
	'\"I mean, these punishments, there almost poetic. Actually, it\'d be more like a limerick, but still...\" <br> - Dean Winchester (S02E15 - Tall Tales)',
	'Sam: \"Dude, I\'m not enabling your sick habit. You\'re like one of those lab rats that pushes the pleasure button instead of the food button until it dies.\" Dean: \"What are you talking about? I eat.\" <br> - Sam and Dean Winchester (S02E13 - Houses of the Holy)',
	'\"Well, I think I learned a valuable lesson: Always take down your Christmas decorations after New Year\'s, or you might get filleted by a hooker from God.\" <br> - Dean Winchester (S01E13 - Houses of the Holy)',
	'\"I\'m laughing on the inside.\" <br> - Sam Winchester (S02E13 - Houses of the Holy)',
	'Father Reynolds: \"What are you doing? What is this?\" <br> Sam: \"Uh, Father, please. I can explain. Um... Actually, maybe I can\'t. This is a - a séance.\" <br> Father Reynolds: \"A séance? Young man, you are in the House of God.\" <br> Sam: It\'s based on early Christian rites, if that helps any.\" <br> - Sam Winchester and Father Reynolds (S02E13 - Houses of the Holy)',
	'\"NO, no. This is a demon or a spirit, you know they find people a few fries short of a happy meal and they trick them into killing these randoms.\" - Dean Winchester (S02E13 - Houses of the Holy)',
	'Father Reynolds: \"So you\'re interested in joining the parish?\" <br> Dean: \"Yeah, well, you know, we just don\'t feel right unless with hit Church every Sunday.\" - Dean Winchester and Father Reynolds (S02E13 - Houses of the Holy)',
	]
function newQuote() {
	var randomNumber = Math.floor(Math.random() * (quotes.length));
	document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
	document.getElementById("quoteDisplay").style.fontFamily ='Pompiere';
	document.getElementById("quoteDisplay").style.fontSize = "40px";
	document.getElementById("quoteDisplay").style.textAlign = "center";
}
