class HousesController < ApplicationController

  def index
    house_data = House.house_data
    @chart = LazyHighCharts::HighChart.new('graph') do |f|
      f.title(text: "Population vs GDP For 5 Big Countries [2009]")
      # f.xAxis(categories: ["United States", "Japan", "China", "Germany", "France"])
      f.xAxis(categories: house_data[0])
      # 若要顯示一列可僅顯示一行
      # f.series(name: "GDP in Billions", yAxis: 0, data: [14119, 5068, 4985, 3339, 2656])
      # f.series(name: "Population in Millions", yAxis: 1, data: [310, 127, 1340, 81, 65])
      f.series(name: "Square Feet AVG", yAxis: 0, data: house_data[1])
      f.series(name: "Total Price AVG", yAxis: 1, data: house_data[2])

      f.yAxis [
        {title: {text: "Square Feet AVG", margin: 70} },
        {title: {text: "Total Price AVG"}, opposite: true},
      ]

      f.legend(align: 'right', verticalAlign: 'top', y: 75, x: -50, layout: 'vertical')
      f.chart({defaultSeriesType: "column"})
    end

    @chart_globals = LazyHighCharts::HighChartGlobals.new do |f|
      f.global(useUTC: false)
      f.chart(
        backgroundColor: {
          linearGradient: [0, 0, 500, 500],
          stops: [
            [0, "rgb(255, 255, 255)"],
            [1, "rgb(240, 240, 255)"]
          ]
        },
        borderWidth: 2,
        plotBackgroundColor: "rgba(255, 255, 255, .9)",
        plotShadow: true,
        plotBorderWidth: 1
      )
      f.lang(thousandsSep: ",")
      f.colors(["#90ed7d", "#f7a35c", "#8085e9", "#f15c80", "#e4d354"])
    end
  end

end
