<template>
  <ejs-heatmap :x-axis="xAxis" :y-axis="yAxis" :data-source="dataSource" />
</template>

<script>
export default {
  data: () => ({
    xAxis: {
      labels: [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec'
      ]
    },
    yAxis: {
      labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    dataSource: [
      [38, 42, 97, 20, 84, 74, 1],
      [41, 79, 72, 29, 63, 85, 46],
      [38, 88, 1, 89, 51, 93, 91],
      [43, 92, 60, 41, 80, 16, 52],
      [64, 30, 46, 55, 74, 62, 21],
      [81, 67, 18, 13, 77, 38, 33],
      [31, 85, 98, 16, 13, 51, 15],
      [99, 75, 70, 55, 66, 10, 70],
      [45, 19, 53, 20, 15, 83, 78],
      [20, 42, 43, 64, 42, 80, 95],
      [59, 69, 27, 89, 42, 92, 44],
      [4, 13, 19, 61, 72, 28, 98]
    ]
  })
}
</script>
