(function(win, doc) {
	const $ = doc.querySelector.bind(doc);
	win.onload = function() {
		doc.onkeyup = function(e) {
			const iframe = $(".mce-edit-area iframe");
			if (!iframe) return;
			if (e.altKey && e.keyCode === 68 /*c*/) {
				const iframeDoc = iframe.contentDocument;
				iframeDoc.body.innerHTML = `
					<p>
						说明：
					</p>
					<p>
						时间：${new Date().toLocaleString()}
					</p>
					<p>
						版本：test分支
					</p>
				`;
			}
		};
	};
	win.onbeforeunload = function() {
		doc.onkeyup = null;
	};
})(window, document);
