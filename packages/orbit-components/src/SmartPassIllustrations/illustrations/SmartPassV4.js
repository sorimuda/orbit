// @flow
import * as React from "react";

import { useRandomIdSeed } from "../../hooks/useRandomId";
import IllustrationWrapper from "./IllustrationWrapper";
import type { Props } from "..";

const SmartPassV4 = ({ primary, secondary, ...props }: Props): React.Node => {
  const randomId = useRandomIdSeed();
  const randomIDLinear = randomId("linear1");
  const randomIDLinear2 = randomId("linear2");

  return (
    <IllustrationWrapper {...props} viewBox="0 0 2181 1662">
      <g>
        <rect width="2181" height="1662" fill="white" />
        <path
          opacity="0.3"
          d="M1125.14 1155.73L1374.88 998.066L1598.9 1130.98L851.314 1575.92L643.147 1446.55L1125.14 1155.73Z"
          fill={`url(#${randomIDLinear})`}
        />
        <path
          d="M222.997 1164.8L989.619 729.261L926.171 690.586L1241.52 683.75L1209.24 863.134L1137.71 819.528L354.868 1265.16L222.997 1164.8Z"
          fill={`url(#${randomIDLinear2})`}
        />
        <path
          d="M1374.88 532.853L1542.9 427.649L1766.92 566.076L1593.83 668.773L1374.88 532.853Z"
          fill="#E8EDF1"
        />
        <path
          d="M1374.88 532.853V998.066L1598.9 1130.98L1593.83 668.773L1374.88 532.853Z"
          fill="#D8E1E8"
        />
        <path
          d="M1598.9 1130.98L1762.27 1028.54L1766.92 566.076L1593.83 668.773L1598.9 1130.98Z"
          fill="#CAD5DF"
        />
        <path
          d="M1467.81 244.608L1467.8 443.981L1635.82 545.119L1636.81 346.185L1467.81 244.608Z"
          fill="#3D3D39"
        />
        <path
          d="M1528.08 543.673L1584.08 576.906L1582.95 511.896L1528.08 477.215V543.673Z"
          fill="#3D3D39"
        />
        <path
          d="M1653.59 335.996V336.017L1636.28 346.511V346.378L1467.81 244.608L1483.7 235.276L1653.59 335.996Z"
          fill="#262624"
        />
        <path
          d="M1653.59 336.017L1652.04 535.838L1635.82 545.119L1636.28 346.511L1653.59 336.017Z"
          fill="#262624"
        />
        <path
          d="M1494.51 532.629L1539.11 503.827L1640.09 563.601L1595.57 593.024L1494.51 532.629Z"
          fill="#3D3D39"
        />
        <path d="M1584.08 576.906L1623.28 553.647L1584.08 530.448V576.906Z" fill="#262624" />
        <path
          d="M1649.67 360.087C1650.92 357.063 1650.59 354.023 1648.93 353.296C1647.26 352.569 1644.9 354.431 1643.65 357.454C1642.4 360.478 1642.73 363.519 1644.39 364.246C1646.06 364.973 1648.42 363.111 1649.67 360.087Z"
          fill="#262624"
        />
        <path
          d="M1649.68 384.737C1650.93 381.714 1650.6 378.673 1648.93 377.946C1647.27 377.219 1644.91 379.081 1643.66 382.105C1642.41 385.128 1642.74 388.169 1644.4 388.896C1646.06 389.623 1648.43 387.761 1649.68 384.737Z"
          fill="#262624"
        />
        <path
          d="M1649.67 409.384C1650.92 406.36 1650.59 403.32 1648.92 402.593C1647.26 401.866 1644.9 403.727 1643.65 406.751C1642.39 409.775 1642.73 412.815 1644.39 413.542C1646.05 414.269 1648.42 412.408 1649.67 409.384Z"
          fill="#262624"
        />
        <path
          d="M1649.67 434.034C1650.93 431.011 1650.59 427.97 1648.93 427.243C1647.27 426.516 1644.91 428.378 1643.65 431.402C1642.4 434.425 1642.74 437.466 1644.4 438.193C1646.06 438.92 1648.42 437.058 1649.67 434.034Z"
          fill="#262624"
        />
        <path
          d="M1600.06 739.092V1174.43C1600.06 1176.59 1601.67 1178.76 1604.89 1180.41C1611.31 1183.73 1621.74 1183.73 1628.17 1180.41C1631.39 1178.76 1632.99 1176.59 1632.99 1174.43V739.092H1600.06Z"
          fill="#D8E1E8"
        />
        <path
          d="M1616.55 747.548C1625.64 747.548 1633.01 743.763 1633.01 739.092C1633.01 734.422 1625.64 730.636 1616.55 730.636C1607.45 730.636 1600.08 734.422 1600.08 739.092C1600.08 743.763 1607.45 747.548 1616.55 747.548Z"
          fill="#E5EAEE"
        />
        <path
          d="M1025.99 1166.15L1600.45 823.878V883.53L1026.94 1225.23L1025.99 1166.15Z"
          fill="#F7931E"
        />
        <path
          d="M1009.26 1103.81V1528.72C1009.26 1530.88 1010.86 1533.04 1014.08 1534.7C1020.51 1538 1030.93 1538 1037.36 1534.7C1040.58 1533.04 1042.19 1530.88 1042.19 1528.72V1103.81H1009.26Z"
          fill="#D8E1E8"
        />
        <path
          d="M1025.72 1112.27C1034.82 1112.27 1042.19 1108.48 1042.19 1103.81C1042.19 1099.14 1034.82 1095.35 1025.72 1095.35C1016.63 1095.35 1009.26 1099.14 1009.26 1103.81C1009.26 1108.48 1016.63 1112.27 1025.72 1112.27Z"
          fill="#E5EAEE"
        />
        <path
          d="M1317.52 926.26V1351.16C1317.52 1353.33 1319.13 1355.49 1322.34 1357.14C1328.77 1360.44 1339.19 1360.44 1345.63 1357.14C1348.85 1355.49 1350.46 1353.33 1350.46 1351.16V926.26H1317.52Z"
          fill="#D8E1E8"
        />
        <path
          d="M1333.96 934.716C1343.05 934.716 1350.43 930.93 1350.43 926.26C1350.43 921.589 1343.05 917.803 1333.96 917.803C1324.86 917.803 1317.49 921.589 1317.49 926.26C1317.49 930.93 1324.86 934.716 1333.96 934.716Z"
          fill="#E5EAEE"
        />
        <path
          d="M1559.41 773.518C1556.78 830.766 1517.92 861.921 1472.61 842.991C1454.93 835.585 1438.8 821.647 1425.83 803.96C1405.55 776.34 1392.97 739.602 1394.2 704.575C1396.19 647.134 1435.17 616.172 1481.11 635.295C1518.94 651.025 1549.37 695.741 1557.44 743.035C1559.19 753.091 1559.85 763.313 1559.41 773.518V773.518Z"
          fill={primary}
        />
        <path
          d="M1552.18 770.482C1549.77 822.697 1514.33 851.111 1473.02 833.853C1456.88 827.088 1442.18 814.383 1430.39 798.194C1411.89 773.009 1400.43 739.51 1401.55 707.519C1403.4 655.142 1438.9 626.9 1480.8 644.352C1515.3 658.697 1543.06 699.47 1550.42 742.607C1552.01 751.804 1552.6 761.152 1552.18 770.482V770.482Z"
          fill={secondary}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1480.9 790.604L1495.91 804.144V795.26L1483.08 778.653V778.572C1483.44 775.155 1483.59 771.718 1483.53 768.282L1483.45 749.81L1522.11 781.017L1522.06 770.635L1504.89 751.033L1497.46 742.577L1483.35 726.479L1483.21 695.579C1483.24 691.326 1482.67 687.092 1481.52 683.006C1480.22 678.625 1478.29 675.61 1476.29 674.52C1474.29 673.429 1472.32 674.326 1471.11 677.311C1470.12 679.603 1469.51 683.2 1469.53 688.1L1469.68 719.297L1431.63 721.171L1431.68 731.553L1469.78 742.465L1469.87 760.803C1469.84 764.421 1470.02 768.037 1470.4 771.633L1470.69 773.477L1458.2 774.629V783.513L1472.6 786.243V785.938L1474.31 796.635C1474.92 800.517 1478.65 802.555 1479.26 799.335L1480.9 790.604Z"
          fill={primary}
        />
      </g>
      <defs>
        <linearGradient
          id={randomIDLinear}
          x1="1121.02"
          y1="998.066"
          x2="1121.02"
          y2="1575.92"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#BAC7D5" />
          <stop offset="0.04" stopColor="#BAC7D5" stopOpacity="0.96" />
          <stop offset="1" stopColor="#BAC7D5" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id={randomIDLinear2}
          x1="1368.48"
          y1="592.209"
          x2="413.949"
          y2="1147.06"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#009882" />
          <stop offset="1" stopColor="#01A891" stopOpacity="0" />
        </linearGradient>
      </defs>
    </IllustrationWrapper>
  );
};

export default SmartPassV4;
