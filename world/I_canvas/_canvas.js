var Canvas = function(data) {
    this.load(data);
};

<script>
var canvas=document.getElementById('canvas');
var ctx=canvas.getContext('2d');
ctx.fillStyle='#FF0000';
ctx.fillRect(0,0,80,80);
</script>