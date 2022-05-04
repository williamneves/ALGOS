// Extract Domain from URL

function domainName(url) {
	//your code here
	let urldomain = "";
    if (url.includes("www.")) {
        urldomain = url.split("www.")[1].split(".")[0];
    }
    if (url.includes("http://www.")) {
        urldomain = url.split("http://www.")[1].split(".")[0];
    }
    if (url.includes("http://")) {
        urldomain = url.split("http://")[1].split(".")[0];
    }
    if (url.includes("https://")) {
        urldomain = url.split("https://")[1].split(".")[0];
    }
    else {
        urldomain = url.split(".")[0];
    }

	return urldomain
}

console.log(domainName("http://google.com"));
console.log(domainName("http://www.google.com"));
