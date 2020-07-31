(function(win, doc) {
	const $ = doc.querySelector.bind(doc);
	win.onload = function() {
		doc.onkeyup = function(e) {
			const iframe = $(".mce-edit-area iframe");
			if (!iframe) return;
			const iframeDoc = iframe.contentDocument;
			if (e.altKey && e.keyCode === 68 /*D*/) {
				iframeDoc.body.innerHTML = `
					<p>
						说明：
					</p>
					<p>
						时间：${new Date().toLocaleString()}
					</p>
					<p>
						版本：test-2.0分支
					</p>
				`;
			} else if (e.altKey && e.keyCode === 65 /*A*/) {
				iframeDoc.body.innerHTML = `
					<p>
						说明：
					</p>
					<p>
						时间：${new Date().toLocaleString()}
					</p>
					<p>
						版本：test-2.0-guoyang分支
					</p>
				`;
			} else if (e.altKey && e.keyCode === 66 /*B*/) {
				iframeDoc.body.innerHTML = `
					<p>
						说明：
					</p>
					<p>
						时间：${new Date().toLocaleString()}
					</p>
					<p>
						版本：test-2.5分支
					</p>
				`;
			}
		};
	};
	win.onbeforeunload = function() {
		doc.onkeyup = null;
	};
})(window, document);
