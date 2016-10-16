var isQrRecorded = false;
var bikeRack = Math.floor((Math.random() * 10) + 1);

$(document).ready(function(){
	$('#reader').html5_qrcode(
		function(data){	
			$('#read').html("You are checked-in at Bike Rack MSU-" + bikeRack);
			$('#reader').hide();
			isQrRecorded = true;
			$('#read_error').html("");
			$('#vid_error').html("");
			$('#reader').html5_qrcode_stop()
		}, function(error){
			if (!isQrRecorded) {
				$('#read_error').html("Please put the camera in front of the QR code and hold still.");
				$('#read').html("");
				$('#vid_error').html("");
			}
		}, function(videoError){
			if (!isQrRecorded) {
				$('#vid_error').html("Please allow access to your camera.");
				$('#read_error').html("");
				$('#read').html("");
			}
		}
	);
});