document.addEventListener("plusready", function() {
	var _BARCODE = 'MyPlugin',
		B = window.plus.bridge;
	var myPlugin = {
	    /*连接蓝牙打印机*/
		connectBluetoothPrinter: function(successCallback, errorCallback) {
			var success = typeof successCallback !== 'function' ? null : function(args) {
					successCallback(args);
				},
				fail = typeof errorCallback !== 'function' ? null : function(code) {
					errorCallback(code);
				};
			callbackID = B.callbackId(success, fail);

			return B.exec(_BARCODE, "connectBluetoothPrinter", [callbackID]);
		},
		/*打印图片*/
		printImg: function(data, successCallback, errorCallback) {
			var success = typeof successCallback !== 'function' ? null : function(args) {
					successCallback(args);
				},
				fail = typeof errorCallback !== 'function' ? null : function(code) {
					errorCallback(code);
				};
			callbackID = B.callbackId(success, fail);

			return B.exec(_BARCODE, "PrintImg", [callbackID, data]);
		},
		/*打开蓝牙打印机*/
		openBluetoothPrinter: function(data, successCallback, errorCallback) {
			var success = typeof successCallback !== 'function' ? null : function(args) {
					successCallback(args);
				},
				fail = typeof errorCallback !== 'function' ? null : function(code) {
					errorCallback(code);
				};
			callbackID = B.callbackId(success, fail);

			return B.exec(_BARCODE, "openBluetoothPrinter", [callbackID, data]);
		},
		/*蓝牙是否启用*/
		bluetoothIsEnabled: function(successCallback, errorCallback) {
			var success = typeof successCallback !== 'function' ? null : function(args) {
					successCallback(args);
				},
				fail = typeof errorCallback !== 'function' ? null : function(code) {
					errorCallback(code);
				};
			callbackID = B.callbackId(success, fail);

			return B.exec(_BARCODE, "bluetoothIsEnabled", [callbackID]);
		},
		/*扫一扫*/
		scan: function(successCallback, errorCallback) {
			var success = typeof successCallback !== 'function' ? null : function(args) {
					successCallback(args);
				},
				fail = typeof errorCallback !== 'function' ? null : function(code) {
					errorCallback(code);
				};
			callbackID = B.callbackId(success, fail);

			return B.exec(_BARCODE, "scan", [callbackID]);
		},
		/*解除注册二维码扫描监听*/
		unRegQRCodeDataListener: function(successCallback, errorCallback) {
			var success = typeof successCallback !== 'function' ? null : function(args) {
					successCallback(args);
				},
				fail = typeof errorCallback !== 'function' ? null : function(code) {
					errorCallback(code);
				};
			callbackID = B.callbackId(success, fail);

			return B.exec(_BARCODE, "unRegQRCodeDataListener", [callbackID]);
		},
		/*注册二维码扫描监听*/
		regQRCodeDataListener: function(successCallback, errorCallback) {
			var success = typeof successCallback !== 'function' ? null : function(args) {
					successCallback(args);
				},
				fail = typeof errorCallback !== 'function' ? null : function(code) {
					errorCallback(code);
				};
			callbackID = B.callbackId(success, fail);

			return B.exec(_BARCODE, "regQRCodeDataListener", [callbackID]);
		}

	};
	window.plus.myPlugin = myPlugin;
}, true);