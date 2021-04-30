;(function(win, doc) {
	function fireKeyEvent(el, evtType, keyCode) {
		let evtObj
		if (document.createEvent) {
			if (window.KeyEvent) {
				//firefox 浏览器下模拟事件
				evtObj = document.createEvent('KeyEvents')
				evtObj.initKeyEvent(evtType, true, true, window, true, false, false, false, keyCode, 0)
			} else {
				//chrome 浏览器下模拟事件
				evtObj = document.createEvent('UIEvents')
				evtObj.initUIEvent(evtType, true, true, window, 1)

				delete evtObj.keyCode
				if (typeof evtObj.keyCode === 'undefined') {
					//为了模拟keycode
					Object.defineProperty(evtObj, 'keyCode', { value: keyCode })
				} else {
					evtObj.key = String.fromCharCode(keyCode)
				}

				if (typeof evtObj.ctrlKey === 'undefined') {
					//为了模拟ctrl键
					Object.defineProperty(evtObj, 'ctrlKey', { value: true })
				} else {
					evtObj.ctrlKey = true
				}
			}
			el.dispatchEvent(evtObj)
		} else if (document.createEventObject) {
			//IE 浏览器下模拟事件
			evtObj = document.createEventObject()
			evtObj.keyCode = keyCode
			el.fireEvent('on' + evtType, evtObj)
		}
	}

	const $ = doc.querySelector.bind(doc)
	// doc.oncontent
	win.addEventListener('DOMContentLoaded', function() {
		doc.onkeyup = function(e) {
			const iframe = $('.mce-edit-area iframe')
			if (!iframe) return
			const iframeDoc = iframe.contentDocument
			if (e.altKey && e.keyCode === 68 /*D*/) {
				iframeDoc.body.innerHTML = `
					<p>
						说明：已修复
					</p>
					<p>
						时间：${new Date().toLocaleString()}
					</p>
					<p>
						版本：test-2.0分支
					</p>
				`
			} else if (e.altKey && e.keyCode === 65 /*A*/) {
				iframeDoc.body.innerHTML = `
					<p>
						说明：已修复
					</p>
					<p>
						时间：${new Date().toLocaleString()}
					</p>
					<p>
						版本：test-2.0 & test-2.5分支
					</p>
				`
			} else if (e.altKey && e.keyCode === 66 /*B*/) {
				iframeDoc.body.innerHTML = `
					<p>
						说明：已修复
					</p>
					<p>
						时间：${new Date().toLocaleString()}
					</p>
					<p>
						版本：test-2.5分支
					</p>
				`
			} else if (e.altKey && e.keyCode === 67 /*c*/) {
				iframeDoc.body.innerHTML = `
					<p>
						说明：已修复
					</p>
					<p>
						时间：${new Date().toLocaleString()}
					</p>
					<p>
						版本：test分支
					</p>
				`
			}
			fireKeyEvent(iframeDoc.body, 'keyup', 13)
		}
	})
	win.onbeforeunload = function() {
		doc.onkeyup = null
	}
})(window, document)
