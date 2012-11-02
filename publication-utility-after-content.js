<script type="text/javascript">
	
	jQuery(document).ready(function($) {
		//strip HTML tags from the .hidden-cat div
		$("#pub-result > li.item > div.hidden-cat").each(function() {
			$(this).html( $(this).text() );
		});

		var author;
		var year;
		var type;

		$("#list_authors").change(filterResults);
		$("#list_years").change(filterResults);
		$("#list_types").change(filterResults);

		function filterResults() {
			
			if ($("#list_authors option:selected").val() != 0){
				author = $("#list_authors option:selected").text();
			}else{
				author = "";
			}
			if ($("#list_years option:selected").val() != 0){
				year = $("#list_years option:selected").text();
			}else{
				year = "";
			}
			if ($("#list_types option:selected").val() != 0){
				type = $("#list_types option:selected").text();
			}else{
				type = "";
			}
			$("#pub-result > li.item > div.hidden-cat").each(function() {
				if($(this).text().indexOf(author) >= 0 && $(this).text().indexOf(year) >= 0 && $(this).text().indexOf(type) >= 0){
					$(this).parent().css("display","block");
				}else{
					$(this).parent().css("display","none");
				}

			});
		}
		
	});


</script>