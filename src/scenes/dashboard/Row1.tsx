import DashboardBox from "@/components/DashboardBox";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import axiosInstance from "@/config/axiosInstance";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setMonthlyRevenueExpensesData } from "../../state/data";
import { Box, useTheme } from "@mui/material";
import { Month } from "@/interfaces/interface";
import BoxHeader from "@/components/BoxHeader";

type Props = {};

const Row1: React.FC = (props: Props) => {
  const dispatch = useDispatch();
  const monthlyRevenueExpensesData = useSelector(
    (state: any) => state.data.monthlyRevenueExpensesData
  );
  const { palette } = useTheme();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosInstance.get(`/api/v1/kpi`);
        console.log(response, "response");
        const data = response?.data?.kpis[0]?.monthlyData?.map(
          ({ month, revenue, expenses }: Month) => {
            return {
              month: month.slice(0, 3),
              revenue: revenue,
              expenses: expenses,
            };
          }
        );
        dispatch(setMonthlyRevenueExpensesData({ data: data }));
      } catch (err) {
        console.log(err, "Error");
      }
    };
    fetchData();
  }, []);
  return (
    <>
      <DashboardBox gridArea="a">
        <Box>
          <BoxHeader
            title="Revenue and Expeses"
            subTitle="Top line represents revenue, bottom line represents expenses"
            sideText="+4%"
          />
        </Box>
        <ResponsiveContainer width="100%" height="85%">
          <AreaChart
            width={500}
            height={400}
            data={monthlyRevenueExpensesData}
            margin={{
              top: 15,
              right: 25,
              left: -10,
              bottom: 60,
            }}
          >
            <defs>
              <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor={palette.primary[300]}
                  stopOpacity={0.5}
                />
                <stop
                  offset="95%"
                  stopColor={palette.primary[300]}
                  stopOpacity={0}
                />
              </linearGradient>

              <linearGradient id="colorExpenses" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor={palette.primary[300]}
                  stopOpacity={0.5}
                />
                <stop
                  offset="95%"
                  stopColor={palette.primary[300]}
                  stopOpacity={0}
                />
              </linearGradient>
            </defs>
            <XAxis
              dataKey="name"
              tickLine={false}
              style={{ fontSize: "10px" }}
            />
            <YAxis
              tickLine={false}
              style={{ fontSize: "10px" }}
              axisLine={{ strokeWidth: "0" }}
              domain={[8000, 23000]}
            />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="revenue"
              stroke={palette.primary.main}
              fillOpacity={1}
              fill="url(#colorRevenue)"
              dot={true}
            />
            <Area
              type="monotone"
              dataKey="expenses"
              stroke={palette.primary.main}
              fillOpacity={1}
              fill="url(#colorExpenses)"
              dot={true}
            />
          </AreaChart>
        </ResponsiveContainer>
      </DashboardBox>
      <DashboardBox gridArea="b"></DashboardBox>
      <DashboardBox gridArea="c"></DashboardBox>
    </>
  );
};

export default Row1;
