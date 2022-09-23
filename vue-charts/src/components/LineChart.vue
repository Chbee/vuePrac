<template>
  <canvas ref="lineChart" id="lineChart"></canvas>
</template>


<script>

export default {
    mounted() {
        const labels = [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
        ];

        const data = {
            labels: labels,
            datasets: [{
            label: 'My First dataset',
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: [0, 10, 5, 2, 20, 30, 45],
            }]
        };

        const config = {
            type: 'line',
            data: data,
            options: {}
        };

        // var ctx = document.getElementById('lineChart').getContext('2d')
        var ctx = this.$refs.lineChart
        const myChart = new this.$_Chart(
            ctx,
            config
        );

        console.log(myChart)
    }
}
</script>

<style>

</style>