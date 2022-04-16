new YTC({
	element: document.querySelector("#ytc"),
	startComments: 5,
	intervalFrom: 3,
	intervalTo: 15,
	dateString: '##amount## ##range## ago',
	dateRanges: {
		justNow: 'Just now',
		second: 'second',
		seconds: 'seconds',
		minute: 'minute',
		minutes: 'minutes',
		hour: 'hour',
		hours: 'hours',
		day: 'day',
		days: 'days'
	},
	language: {
		reply: 'Reply'
	},
	comments: [{ // From oldest to newest commis
		img: "https://yt3.ggpht.com/a/AATXAJxqaiw3bgwLzjcGLiltSWvNf09WyOItxmgHdpcdSw=s48-c-k-c0xffffffff-no-rj-mo",
			username: "BeatsDoktor",
			text: "Not gonna lie if this wasn't obvious to you I don't know what is",
			secAgo: 3*60,
			likesAmt: "8"
		}, {
			img: "https://yt3.ggpht.com/a/AATXAJy2mIL918ACigh6wKXv_uUD5f06MGdmkksG1Ece=s48-c-k-c0xffffffff-no-rj-mo",
			username: "Yuri",
			text: "This is why I hate YouTube sometimes",
			secAgo: 2*60,
			likesAmt: "4"
		}, {
			img: "https://yt3.ggpht.com/a/AATXAJy8Y5gVF9w4E-hqK7oTDfk4oFQDsOTEqcOgtNNXMg=s48-c-k-c0xffffffff-no-rj-mo",
			username: "Lya DeppSoul",
			text: "Blessed upload. This means so much and I will make sure that all my friends will know about this thing",
			secAgo: 2*60,
			likesAmt: "3"
		}, {
			img: "https://yt3.ggpht.com/a/AATXAJwEBrunjatnllegmq3Uz-EK-jm7y3ZovjB-=s48-c-k-c0xffffffff-no-rj-mo",
			username: "Mofo fo",
			text: "Shit just got real in 2021 😂",
			secAgo: 2*60,
			likesAmt: "5"
		}, {
			img: "https://yt3.ggpht.com/a/AATXAJyreGgCwKqias_V4OK5Uy8sXPdYiRF17xUZht_n=s48-c-k-c0xffffffff-no-rj-mo",
			username: "Freddy W",
			text: "We need a video platform which is not censored and allows everything, right?",
			secAgo: 1*60,
			likesAmt: "2"
		}, {
			img: "https://yt3.ggpht.com/a/AATXAJzwTT9XHcWvMDbR6Slq40X2Gl374oHjN4SRFGt_=s48-c-k-c0xffffffff-no-rj-mo",
			username: "Jimbo89",
			text: "Just got the link and unlocked this video. Like wtf? What are they thinking?",
			likesAmt: "1"
		}, {
			img: "https://yt3.ggpht.com/a/AATXAJxjnSnobr4U-XrU1-R0Q1vaTo5h6I12vmPBWHC7pw=s48-c-k-c0xffffffff-no-rj-mo",
			username: "Lee",
			text: "If enough people know about this there is still hope 😍",
			likesAmt: "2"
		}, {
			img: "https://yt3.ggpht.com/a/AATXAJziDmtBdq1k7bWh5SddND25ETiz-3dLlRFVnEVf=s48-c-k-c0xffffffff-no-rj-mo",
			username: "ani ma",
			text: "I am SHOCKED and I don't say this lightly",
			likesAmt: ""
		}, {
			img: "https://yt3.ggpht.com/a/AATXAJzzR_ZUpRMD407jWTtOnSG1LZYopUgRQ0y84tE7=s48-c-k-c0xffffffff-no-rj-mo",
			username: "MC Ducky",
			text: "dude this is the living proof to how fucked up everything is right now",
			likesAmt: "1"
		}, {
			img: "https://yt3.ggpht.com/a/AATXAJw4AzqMKJND9QexPElZpdvKcc4wPnM3WgtRzvgK3w=s48-c-k-c0xffffffff-no-rj-mo",
			username: "Nick",
			text: "hey can anyone read this?",
			likesAmt: ""
		}, {
			img: "https://yt3.ggpht.com/a/AATXAJyBg_M6c235cSfuRaVMNlwaNBi61AiCVE1aog=s48-c-k-c0xffffffff-no-rj-mo",
			username: "Seraphino",
			text: "Video is not on YouTube but using YouTube comments 😂",
			likesAmt: ""
		}, {
			img: "https://yt3.ggpht.com/a/AATXAJzqvOt4kGm6vGhhfq-Iee5g5zr6ISAnLHqm1WgWhg=s48-c-k-c0xffffffff-no-rj-mo",
			username: "Woodie",
			text: "first time a video actually changed my life, not sure if for better or worse",
			likesAmt: "1"
		}, {
			img: "https://yt3.ggpht.com/ytc/AAUvwnho-rYc5F5yMvUVxtOrkjOoVPuzQZlwO51okQ=s48-c-k-c0xffffffff-no-rj-mo",
			username: "Balls McGee",
			text: "MrBeast warned us",
			likesAmt: ""
		}, {
			img: "https://yt3.ggpht.com/ytc/AAUvwniQVzBQT_YDZSwucW13jow-vgL3Cmlaez08Lktkjw=s48-c-k-c0xffffffff-no-rj-mo",
			username: "Tessa",
			text: "Please show this to your friends 😥 we are all affected by it",
			likesAmt: ""
		}, {
			img: "https://yt3.ggpht.com/ytc/AAUvwngwvAwW2r3fOHt5WwieUGoRzkDk-VT8bJDLxYN2eQ=s48-c-k-c0xffffffff-no-rj-mo",
			username: "Noxeus",
			text: "When you realize the 2022 world end stories had more to them than you thought. Welcome!",
			likesAmt: "2"
		}, {
			img: "https://yt3.ggpht.com/ytc/AAUvwnhA3JDJqmcqtF8avSrqepxshUVv9hgJFmh4nw=s48-c-k-c0xffffffff-no-rj-mo",
			username: "rahimuddin",
			text: "not good at all",
			likesAmt: "1"
		}, {
			img: "https://yt3.ggpht.com/ytc/AAUvwnhsz_NJih5S2jevCoCPwCGOEkcVpver0vuT7OyVSw=s48-c-k-c0xffffffff-no-rj-mo",
			username: "caleb howard",
			text: "time to take back control of our lives",
			likesAmt: "1"
		}, {
			img: "https://yt3.ggpht.com/ytc/AAUvwngrlI1uU3A1Vl39IS2PkJhMDdcCcvyL6Hc4W7L85w=s48-c-k-c0xffffffff-no-rj-mo",
			username: "Mona",
			text: "Spread the WORD! HAVE A CHANGE! PLEASE!",
			likesAmt: "3"
		}, {
			img: "https://yt3.ggpht.com/ytc/AAUvwnh-bFhr_O6TUoBw_36-e2Nsq9RAPQOn_pfWfqyv=s48-c-k-c0xffffffff-no-rj-mo",
			username: "Elif Naz",
			text: "I never wrote a comment on YouTube and now I am here because this is crazy. Of course they will never show you this it breaks the entire system...",
			likesAmt: ""
		}, {
			img: "https://yt3.ggpht.com/ytc/AAUvwnhPH1hXrm-Eju0jukRyHT8U7yOI2i_1nCdZZyxyuA=s48-c-k-c0xffffffff-no-rj-mo",
			username: "Slerve212",
			text: "Trump gone and now this",
			likesAmt: ""
		}, {
			img: "https://yt3.ggpht.com/ytc/AAUvwnjvjkV1Oyy4SOmwx0OQ_2z4mrtJVur1X4GrBxH2oQ=s48-c-k-c0xffffffff-no-rj-mo",
			username: "Sol",
			text: "when you understand nothing and still comment",
			likesAmt: "2"
		}, {
			img: "https://yt3.ggpht.com/ytc/AAUvwnhY8YtWj6W2Y8afbIl9KpkazlZkQRPJ7FGWQcNH0A=s48-c-k-c0xffffffff-no-rj-mo",
			username: "Naieeen",
			text: "I call bullshit on this 😂😂",
			likesAmt: ""
		}, {
			img: "https://yt3.ggpht.com/ytc/AAUvwnieDbEYyg2Vv3XgwGKez9wM697vJcfY4S3Ikg=s48-c-k-c0xffffffff-no-rj-mo",
			username: "Star Platinum",
			text: "What? This has been going on for nearly 10 years now? Makes you wonder what else happens in this world",
			likesAmt: ""
		}, {
			img: "https://yt3.ggpht.com/ytc/AAUvwnjahw14yiAoo7pwP9jOu0yc2He7dci8w66FNQfq=s48-c-k-c0xffffffff-no-rj-mo",
			username: "NxTLfe Nei",
			text: "WTF!!!",
			likesAmt: ""
		}, {
			img: "https://yt3.ggpht.com/ytc/AAUvwnhGyPZLrJSirzaWC9XgwsqyT3LZZVJCaVQ-oE1N=s48-c-k-c0xffffffff-no-rj-mo",
			username: "DesireeAngelicMelodies",
			text: "Please sub me I need 1000 subs",
			likesAmt: ""
		}, {
			img: "https://yt3.ggpht.com/ytc/AAUvwngBMeNHk_Vvk6MhcV9DMrBd1cHUYGyBRFsHuz7U=s48-c-k-c0xffffffff-no-rj-mo",
			username: "Ale xx",
			text: "I understand why you lock the video it is quite disturbing to watch and you should also put an age requirement to this",
			likesAmt: ""
		}, {
			img: "https://yt3.ggpht.com/ytc/AAUvwniNqyoRpRHRa8Cm4z9xIq51sQ_U1Pjz2IBa2vU0=s48-c-k-c0xffffffff-no-rj-mo",
			username: "Davud",
			text: "Where was this originally uploaded?",
			likesAmt: ""
		}, {
			img: "https://yt3.ggpht.com/ytc/AAUvwnjIXryPvRMpJRfBkaYhHKYVSFnQMCV2E9KN6CeV=s48-c-k-c0xffffffff-no-rj-mo",
			username: "Cookie KTM",
			text: "mdr",
			likesAmt: ""
		}, {
			img: "https://yt3.ggpht.com/ytc/AAUvwngoByukZ60UfWcaOsIbyKAunRHeXMBG0bvG4l4MfQ=s48-c-k-c0xffffffff-no-rj-mo",
			username: "zzLegend",
			text: "said it all the time if we had AI controlling us it would be far better than with humans",
			likesAmt: ""
		}, {
			img: "https://yt3.ggpht.com/ytc/AAUvwnieaDfXocsrNIdlnP_zhOfD_QmQTmN5IgWHuxqoKg=s48-c-k-c0xffffffff-no-rj-mo",
			username: "Marlixツ",
			text: "Trump left the channel",
			likesAmt: ""
		}, {
			img: "https://yt3.ggpht.com/ytc/AAUvwnjuzGRfdTpCV-7yDxPpNJE40pFKR5NE8DhNGiCD=s48-c-k-c0xffffffff-no-rj-mo",
			username: "PalmTree Paradise",
			text: "imagine the people living in that other apartment building watching this 😂",
			likesAmt: ""
		}, {
			img: "https://yt3.ggpht.com/ytc/AAUvwnh6LckYl5FwlIGIW0kOCa9uVhAt0sqkN-SyxBJt=s48-c-k-c0xffffffff-no-rj-mo",
			username: "AWZS GHOST",
			text: "fuck YouTube",
			likesAmt: "2"
		}, {
			img: "https://yt3.ggpht.com/ytc/AAUvwniLWE0H2_alvIHtSPvIeblUcxabznQXqp3GKwtF_Q=s48-c-k-c0xffffffff-no-rj-mo",
			username: "Darlene Sterling",
			text: "My friend sent me the link to this video and I will try my best to tell as many as I know about this misery 😭",
			likesAmt: ""
		}, {
			img: "https://yt3.ggpht.com/ytc/AAUvwng5xOVu1ATGBgtMTLwCtMuF8PEQZZNSBPemsO5Y=s48-c-k-c0xffffffff-no-rj-mo",
			username: "Club Sandwich",
			text: "anyone hungry? look at my pic",
			likesAmt: "1"
		}, {
			img: "https://yt3.ggpht.com/ytc/AAUvwniCPl88EEtltcmmAz2S4MrsIjCkzNvb-LnmKxgu=s48-c-k-c0xffffffff-no-rj-mo",
			username: "Nate T",
			text: "why would a few people in this world change the life of the entire planet and WHY we ALLOW THIS?",
			likesAmt: "2"
		}, {
			img: "https://yt3.ggpht.com/ytc/AAUvwniYVyaLUlI0BYT1DZOuLSkdJzPUNsATUOdWHlvH=s48-c-k-c0xffffffff-no-rj-mo",
			username: "That Guy",
			text: "this is the biggest leak I have seen since Snowden",
			likesAmt: "1"
		}, {
			img: "https://yt3.ggpht.com/ytc/AAUvwngnhf6T_-U-54oB2FnqJN0KZn4x0V5WuxRchQ=s48-c-k-c0xffffffff-no-rj-mo",
			username: "Pista Sándor",
			text: "had to stop after first minute",
			likesAmt: ""
		}, {
			img: "https://yt3.ggpht.com/ytc/AAUvwnjMbb6OERYzuN4m2DOo9oWt5NBEqq9kveixQwiy=s48-c-k-c0xffffffff-no-rj-mo",
			username: "Jessica Robin",
			text: "It makes me want to cry watching theas kinds of vids",
			likesAmt: "1"
		}, {
			img: "https://yt3.ggpht.com/ytc/AAUvwnhnGbuEesxfwsIOKgieK98rTiW-A1nanTwIe17ugQ=s48-c-k-c0xffffffff-no-rj-mo",
			username: "Noot Noot",
			text: "retarded apes keep holding no matter what",
			likesAmt: ""
		}, {
			img: "https://yt3.ggpht.com/ytc/AAUvwnh97QPLQkZJcEANdzQ8hZ9HllNNrQkNAFu7nzoh=s48-c-k-c0xffffffff-no-rj-mo",
			username: "FAT",
			text: "fuggin fat lords",
			likesAmt: ""
		}, {
			img: "https://yt3.ggpht.com/ytc/AAUvwngaCumxZdgTkj2hxf4-otQZXk_cIcHjZawsvscN=s48-c-k-c0xffffffff-no-rj-mo",
			username: "Vi Works",
			text: "can I download this video? Anyone knows how?",
			likesAmt: ""
		}, {
			img: "https://yt3.ggpht.com/ytc/AAUvwnhm3GquTukNbCSbO-dDzikGaitjCmFKreXB-fM1Tg=s48-c-k-c0xffffffff-no-rj-mo",
			username: "UnpossessedApple",
			text: "Corona perfect distraction for things like this",
			likesAmt: "1"
		}, {
			img: "https://yt3.ggpht.com/ytc/AAUvwnitHE7wltSMsnu1tNqyfM0eblf0ibi2mRbPbg=s48-c-k-c0xffffffff-no-rj-mo",
			username: "Gillian Hull",
			text: "Can't wait for Joe Rogan to go through this next epi",
			likesAmt: ""
		}, {
			img: "https://yt3.ggpht.com/ytc/AAUvwnjGEgXWCIVn2ekZ-J7UmptXPRzqAfwLlAA2tA=s48-c-k-c0xffffffff-no-rj-mo",
			username: "Saul Mondragon",
			text: "posting here simply because idc",
			likesAmt: ""
		}, {
			img: "https://yt3.ggpht.com/ytc/AAUvwniitK9ZOZ8-GRP-sPh_CxzbpHcNm82X2dCPjFf-lQ=s48-c-k-c0xffffffff-no-rj-mo",
			username: "Joseph Ritchie",
			text: "Me watching here in the Philippines 😭😭😭",
			likesAmt: ""
		}, {
			img: "https://yt3.ggpht.com/ytc/AAUvwnjT4n1qhL8Yi2tC_zhrOJE3SZDAKHsauPuhlLPGfw=s48-c-k-c0xffffffff-no-rj-mo",
			username: "Alex",
			text: "Everyone who reads this have a good day",
			likesAmt: "1"
		}, {
			img: "https://yt3.ggpht.com/ytc/AAUvwngPUlX6GyGdw8Sk2bg2rCCU2lbk5V3G6xOwdw=s48-c-k-c0xffffffff-no-rj-mo",
			username: "Youtube Rules",
			text: "Deleting my account now",
			likesAmt: ""
		}, {
			img: "https://yt3.ggpht.com/ytc/AAUvwngYUMc77ifUyzBEVV8e9eDxUwuNtxZn0FGZxu6O=s48-c-k-c0xffffffff-no-rj-mo",
			username: "Vlad Simonov",
			text: "this is really bad guys",
			likesAmt: ""
		}, {
			img: "https://yt3.ggpht.com/ytc/AAUvwni2VXtyASNT1lZyfyhx_sYzE9tBn2vVqhdTAA=s48-c-k-c0xffffffff-no-rj-mo",
			username: "Donald Gray",
			text: "SHARE SHARE SHARE SHARE",
			likesAmt: ""
		}, {
			img: "https://yt3.ggpht.com/ytc/AAUvwniG_YwoHXjo4rIxYxGxpwXuZ0BRvHojqH_bjgb4=s48-c-k-c0xffffffff-no-rj-mo",
			username: "Lacci Nicole",
			text: "When everyone closes their eyes 🤔🤔🤔",
			likesAmt: ""
		},
	]

});