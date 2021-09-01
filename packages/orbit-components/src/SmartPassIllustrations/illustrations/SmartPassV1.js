// @flow
import * as React from "react";

import { useRandomIdSeed } from "../../hooks/useRandomId";
import type { Props } from "..";
import IllustrationWrapper from "./IllustrationWrapper";

const SmartPassV1 = ({ primary = "white", secondary = "black", ...props }: Props): React.Node => {
  const randomId = useRandomIdSeed();
  const randomIDLinear = randomId("linear1");
  const randomIDLinear2 = randomId("linear2");
  const randomIDLinear3 = randomId("linear2");

  return (
    <IllustrationWrapper {...props} viewBox="0 0 2200 1300">
      <g>
        <path
          opacity="0.3"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1940.1 1040.42L1910.1 1064.35L1011.92 629.61L1053.92 611.69L1940.1 1040.42Z"
          fill={`url(#${randomIDLinear})`}
        />
        <path
          d="M1105.99 639.03L1068.07 657.5L1010.55 629.32L1068.07 591.09L1105.99 639.03Z"
          fill="#EDEDED"
        />
        <path
          d="M1101.49 55.65L1068.07 67.87L1057.16 65.47L1010.55 39.69L1048.15 21.44L1105.99 49.4L1101.49 55.65Z"
          fill="#E8EDF1"
        />
        <path
          d="M1069.37 653.77L1070.83 74.27L1068.07 67.87L1043.25 55.71L1010.55 39.69V629.32L1068.07 657.5L1069.37 653.77Z"
          fill="#D8E1E8"
        />
        <path d="M1068.07 657.5V67.87L1105.99 49.4V639.03L1068.07 657.5Z" fill="#CAD5DF" />
        <path
          d="M1055.09 115.72L1024.62 100.83C1022.05 99.57 1019.96 100.96 1019.96 103.94V192C1020.02 193.568 1020.49 195.094 1021.3 196.436C1022.12 197.777 1023.26 198.89 1024.62 199.67L1055.09 214.56C1057.67 215.82 1059.76 214.42 1059.76 211.45V123.39C1059.7 121.82 1059.23 120.293 1058.42 118.951C1057.6 117.609 1056.46 116.497 1055.09 115.72V115.72Z"
          fill="#8598AF"
        />
        <path
          d="M1027.66 102.31L1021.38 100.76L1017.18 103.56L1025.61 105.85L1027.66 102.31Z"
          fill="#8598AF"
        />
        <path
          d="M1058.55 214.49L1051.23 212.35L1047.02 215.15L1054.21 217.35L1058.55 214.49Z"
          fill="#8598AF"
        />
        <path
          d="M1051.15 217.18L1020.68 202.29C1019.32 201.514 1018.17 200.404 1017.35 199.064C1016.54 197.724 1016.07 196.198 1016.01 194.63V106.55C1016.01 103.55 1018.1 102.18 1020.68 103.44L1051.15 118.33C1052.51 119.109 1053.66 120.222 1054.47 121.563C1055.29 122.905 1055.75 124.432 1055.81 126V214.08C1055.81 217.05 1053.72 218.44 1051.15 217.18Z"
          fill="#A6B5C8"
        />
        <path
          d="M965.4 180C965.4 183.15 963.19 184.24 960.45 182.42C959.011 181.375 957.818 180.028 956.954 178.473C956.09 176.919 955.577 175.194 955.45 173.42C955.45 170.26 957.67 169.18 960.45 171C961.882 172.048 963.068 173.396 963.923 174.951C964.778 176.506 965.282 178.229 965.4 180Z"
          fill="#3C3C3B"
        />
        <path
          d="M1038.14 143.27C1038.01 141.496 1037.5 139.771 1036.64 138.216C1035.77 136.661 1034.58 135.314 1033.14 134.27C1032.67 133.88 1032.12 133.612 1031.52 133.491C1030.93 133.371 1030.31 133.401 1029.73 133.58V133.58L1029.54 133.68L956.9 170.34L964.07 183L1036.37 146.48C1036.61 146.404 1036.84 146.285 1037.04 146.13V146.13C1037.43 145.772 1037.74 145.327 1037.93 144.831C1038.12 144.334 1038.19 143.8 1038.14 143.27V143.27Z"
          fill="#8598AF"
        />
        <path
          d="M965.4 217.78C965.4 220.93 963.19 222.02 960.45 220.19C959.009 219.147 957.814 217.8 956.951 216.245C956.087 214.69 955.574 212.965 955.45 211.19C955.45 208.03 957.67 206.95 960.45 208.77C961.884 209.819 963.07 211.169 963.925 212.726C964.78 214.282 965.284 216.008 965.4 217.78Z"
          fill="#3C3C3B"
        />
        <path
          d="M1038.14 181.06C1038.01 179.286 1037.5 177.561 1036.64 176.006C1035.77 174.451 1034.58 173.104 1033.14 172.06C1032.67 171.669 1032.12 171.402 1031.52 171.281C1030.93 171.161 1030.31 171.191 1029.73 171.37L1029.54 171.47L956.9 208.13L964.07 220.78L1036.37 184.25C1036.61 184.182 1036.84 184.066 1037.04 183.91V183.91C1037.43 183.553 1037.74 183.11 1037.93 182.615C1038.12 182.12 1038.19 181.588 1038.14 181.06V181.06Z"
          fill="#8598AF"
        />
        <path d="M724.74 396.87L966.26 279.9V93.82L724.74 210.79V396.87Z" fill="#6D809C" />
        <path d="M746.52 364.37L944.48 268.66V128.49L746.52 224.2V364.37Z" fill={primary} />
        <g>
          <path
            opacity="0.5"
            d="M955.5 137.29L966.26 132.04V127.94L955.5 133.19V137.29Z"
            fill="#37404B"
          />
          <path
            opacity="0.5"
            d="M955.5 145.09L966.26 139.83V135.73L955.5 140.98V145.09Z"
            fill="#37404B"
          />
          <path
            opacity="0.5"
            d="M955.5 152.88L966.26 147.63V143.53L955.5 148.78V152.88Z"
            fill="#37404B"
          />
          <path
            opacity="0.5"
            d="M955.5 160.68L966.26 155.42V151.32L955.5 156.57V160.68Z"
            fill="#37404B"
          />
          <path
            opacity="0.5"
            d="M955.5 168.47L966.26 163.22V159.12L955.5 164.37V168.47Z"
            fill="#37404B"
          />
          <path
            opacity="0.5"
            d="M955.5 176.27L966.26 171.02V166.91L955.5 172.16V176.27Z"
            fill="#37404B"
          />
          <path
            opacity="0.5"
            d="M955.5 184.06L966.26 178.81V174.71L955.5 179.96V184.06Z"
            fill={primary}
          />
          <path
            opacity="0.5"
            d="M955.5 191.86L966.26 186.61V182.5L955.5 187.76V191.86Z"
            fill="#37404B"
          />
          <path
            opacity="0.5"
            d="M955.5 199.66L966.26 194.4V190.3L955.5 195.55V199.66Z"
            fill="#37404B"
          />
          <path
            opacity="0.5"
            d="M955.5 207.45L966.26 202.2V198.09L955.5 203.35V207.45Z"
            fill="#37404B"
          />
        </g>
        <g>
          <path
            opacity="0.5"
            d="M724.74 249.01L735.49 243.76V239.66L724.74 244.91V249.01Z"
            fill="#37404B"
          />
          <path
            opacity="0.5"
            d="M724.74 256.81L735.49 251.56V247.45L724.74 252.71V256.81Z"
            fill="#37404B"
          />
          <path
            opacity="0.5"
            d="M724.74 264.6L735.49 259.35V255.25L724.74 260.5V264.6Z"
            fill="#37404B"
          />
          <path
            opacity="0.5"
            d="M724.74 272.4L735.49 267.15V263.04L724.74 268.3V272.4Z"
            fill="#37404B"
          />
          <path
            opacity="0.5"
            d="M724.74 280.19L735.49 274.94V270.84L724.74 276.09V280.19Z"
            fill="#37404B"
          />
          <path
            opacity="0.5"
            d="M724.74 287.99L735.49 282.74V278.64L724.74 283.89V287.99Z"
            fill="#37404B"
          />
          <path
            opacity="0.5"
            d="M724.74 295.79L735.49 290.53V286.43L724.74 291.68V295.79Z"
            fill="#37404B"
          />
          <path
            opacity="0.5"
            d="M724.74 303.58L735.49 298.33V294.23L724.74 299.48V303.58Z"
            fill="#37404B"
          />
          <path
            opacity="0.5"
            d="M724.74 311.38L735.49 306.13V302.02L724.74 307.27V311.38Z"
            fill="#37404B"
          />
          <path
            opacity="0.5"
            d="M724.74 319.17L735.49 313.92V309.82L724.74 315.07V319.17Z"
            fill="#37404B"
          />
        </g>
        <path
          d="M966.25 93.81L724.74 210.79L714.55 205.62L954.24 87.92L966.25 93.81Z"
          fill="#A6B5C8"
        />
        <path d="M714.55 391.92V205.62L724.74 210.79V396.87L714.55 391.92Z" fill="#5F728C" />
        <g>
          <path
            opacity="0.5"
            d="M719.35 246.43L724.74 249.08V244.98L719.35 242.32V246.43Z"
            fill="#37404B"
          />
          <path
            opacity="0.5"
            d="M719.35 254.22L724.74 256.88V252.77L719.35 250.12V254.22Z"
            fill="#37404B"
          />
          <path
            opacity="0.5"
            d="M719.35 262.02L724.74 264.67V260.57L719.35 257.91V262.02Z"
            fill="#37404B"
          />
          <path
            opacity="0.5"
            d="M719.35 269.81L724.74 272.47V268.37L719.35 265.71V269.81Z"
            fill="#37404B"
          />
          <path
            opacity="0.5"
            d="M719.35 277.61L724.74 280.26V276.16L719.35 273.5V277.61Z"
            fill="#37404B"
          />
          <path
            opacity="0.5"
            d="M719.35 285.4L724.74 288.06V283.96L719.35 281.3V285.4Z"
            fill="#37404B"
          />
          <path
            opacity="0.5"
            d="M719.35 293.2L724.74 295.85V291.75L719.35 289.1V293.2Z"
            fill="#37404B"
          />
          <path
            opacity="0.5"
            d="M719.35 300.99L724.74 303.65V299.55L719.35 296.89V300.99Z"
            fill="#37404B"
          />
          <path
            opacity="0.5"
            d="M719.35 308.79L724.74 311.44V307.34L719.35 304.69V308.79Z"
            fill="#37404B"
          />
          <path
            opacity="0.5"
            d="M719.35 316.58L724.74 319.24V315.14L719.35 312.48V316.58Z"
            fill="#37404B"
          />
        </g>
        <path
          d="M1969.54 1153L763.08 555.6L829.79 516.03L498.21 509.04L532.16 692.56L607.37 647.95L1812.89 1245.41L1969.54 1153Z"
          fill={`url(#${randomIDLinear2})`}
        />
        <g>
          <g>
            <path
              opacity="0.5"
              d="M206.65 554.88L1605.12 1245.41L1543.83 1283.75L124.88 582.86L206.65 554.88Z"
              fill={`url(#${randomIDLinear3})`}
            />
          </g>
        </g>
        <path
          d="M1296.36 954.62V1239.73C1296.36 1241.19 1297.47 1242.64 1299.69 1243.73C1302.22 1244.83 1304.96 1245.39 1307.72 1245.39C1310.48 1245.39 1313.22 1244.83 1315.75 1243.73C1317.96 1242.62 1319.07 1241.17 1319.07 1239.73V954.62H1296.36Z"
          fill="#E8E8E8"
        />
        <path
          d="M1307.72 960.3C1313.99 960.3 1319.07 957.757 1319.07 954.62C1319.07 951.483 1313.99 948.94 1307.72 948.94C1301.45 948.94 1296.37 951.483 1296.37 954.62C1296.37 957.757 1301.45 960.3 1307.72 960.3Z"
          fill="#F0F0F0"
        />
        <path
          d="M980.6 804V1089.11C980.6 1090.56 981.7 1092.02 983.92 1093.11C986.455 1094.21 989.188 1094.77 991.95 1094.77C994.712 1094.77 997.445 1094.21 999.98 1093.11C1002.2 1092.01 1003.3 1090.55 1003.3 1089.11V804H980.6Z"
          fill="#E8E8E8"
        />
        <path
          d="M991.95 809.66C998.218 809.66 1003.3 807.117 1003.3 803.98C1003.3 800.843 998.218 798.3 991.95 798.3C985.682 798.3 980.6 800.843 980.6 803.98C980.6 807.117 985.682 809.66 991.95 809.66Z"
          fill="#F0F0F0"
        />
        <path
          d="M1296.36 954.62V1239.74C1296.36 1241.19 1297.47 1242.64 1299.69 1243.74C1302.22 1244.83 1304.94 1245.39 1307.69 1245.39C1310.44 1245.39 1313.16 1244.83 1315.69 1243.74C1317.91 1242.63 1319.02 1241.18 1319.02 1239.74V954.62H1296.36Z"
          fill="#CAD5DF"
        />
        <path
          d="M1307.72 960.3C1313.99 960.3 1319.07 957.757 1319.07 954.62C1319.07 951.483 1313.99 948.94 1307.72 948.94C1301.45 948.94 1296.37 951.483 1296.37 954.62C1296.37 957.757 1301.45 960.3 1307.72 960.3Z"
          fill="#E5EAEE"
        />
        <path d="M1296.36 1053.98L999.88 905.17V857.21L1296.36 1006.02V1053.98Z" fill="#F7931E" />
        <path
          d="M693.64 649.51V941.63C693.64 943.08 694.75 944.53 696.97 945.63C699.505 946.728 702.238 947.295 705 947.295C707.762 947.295 710.495 946.728 713.03 945.63C715.24 944.52 716.35 943.07 716.35 941.63V649.51H693.64Z"
          fill="#CAD5DF"
        />
        <path
          d="M705 655.19C711.268 655.19 716.35 652.647 716.35 649.51C716.35 646.373 711.268 643.83 705 643.83C698.732 643.83 693.65 646.373 693.65 649.51C693.65 652.647 698.732 655.19 705 655.19Z"
          fill="#E5EAEE"
        />
        <path
          d="M980.6 804.32V1089.43C980.6 1090.89 981.7 1092.34 983.92 1093.43C986.455 1094.53 989.188 1095.09 991.95 1095.09C994.712 1095.09 997.445 1094.53 999.98 1093.43C1002.2 1092.32 1003.3 1090.87 1003.3 1089.43V804.32H980.6Z"
          fill="#CAD5DF"
        />
        <path
          d="M991.95 810C998.218 810 1003.3 807.457 1003.3 804.32C1003.3 801.183 998.218 798.64 991.95 798.64C985.682 798.64 980.6 801.183 980.6 804.32C980.6 807.457 985.682 810 991.95 810Z"
          fill="#E5EAEE"
        />
        <path d="M980.6 897.08L712.3 762.3V714.35L980.6 849.12V897.08Z" fill="#F7931E" />
        <path
          d="M1659.79 647.43V932.54C1659.79 933.99 1660.9 935.45 1663.12 936.54C1665.65 937.638 1668.38 938.205 1671.15 938.205C1673.91 938.205 1676.64 937.638 1679.17 936.54C1681.39 935.44 1682.5 933.98 1682.5 932.54V647.43H1659.79Z"
          fill="#E8E8E8"
        />
        <path
          d="M1671.15 653.11C1677.42 653.11 1682.5 650.567 1682.5 647.43C1682.5 644.293 1677.42 641.75 1671.15 641.75C1664.88 641.75 1659.8 644.293 1659.8 647.43C1659.8 650.567 1664.88 653.11 1671.15 653.11Z"
          fill="#F0F0F0"
        />
        <path
          d="M1344 497.13V782.24C1344 783.69 1345.11 785.15 1347.33 786.24C1349.86 787.338 1352.6 787.905 1355.36 787.905C1358.12 787.905 1360.86 787.338 1363.39 786.24C1365.6 785.14 1366.71 783.68 1366.71 782.24V497.13H1344Z"
          fill="#E8E8E8"
        />
        <path
          d="M1355.38 502.81C1361.65 502.81 1366.73 500.267 1366.73 497.13C1366.73 493.993 1361.65 491.45 1355.38 491.45C1349.11 491.45 1344.03 493.993 1344.03 497.13C1344.03 500.267 1349.11 502.81 1355.38 502.81Z"
          fill="#F0F0F0"
        />
        <path
          d="M1659.79 647.77V932.88C1659.79 934.34 1660.9 935.79 1663.11 936.88C1665.65 937.973 1668.38 938.537 1671.14 938.537C1673.9 938.537 1676.63 937.973 1679.17 936.88C1681.39 935.77 1682.5 934.32 1682.5 932.88V647.77H1659.79Z"
          fill="#CAD5DF"
        />
        <path
          d="M1671.14 653.45C1677.41 653.45 1682.49 650.907 1682.49 647.77C1682.49 644.633 1677.41 642.09 1671.14 642.09C1664.87 642.09 1659.79 644.633 1659.79 647.77C1659.79 650.907 1664.87 653.45 1671.14 653.45Z"
          fill="#E5EAEE"
        />
        <path d="M1659.79 744.08L1366.73 597.22V551.46L1659.79 698.32V744.08Z" fill="#F7931E" />
        <path
          d="M1344 497.21V782.32C1344 783.78 1345.11 785.23 1347.33 786.32C1349.86 787.413 1352.6 787.977 1355.35 787.977C1358.11 787.977 1360.85 787.413 1363.38 786.32C1365.6 785.21 1366.71 783.76 1366.71 782.32V497.21H1344Z"
          fill="#CAD5DF"
        />
        <path
          d="M1355.38 502.89C1361.65 502.89 1366.73 500.347 1366.73 497.21C1366.73 494.073 1361.65 491.53 1355.38 491.53C1349.11 491.53 1344.03 494.073 1344.03 497.21C1344.03 500.347 1349.11 502.89 1355.38 502.89Z"
          fill="#E5EAEE"
        />
        <path d="M1344.02 587.77L1080.4 455.9V410.14L1344.02 542.01V587.77Z" fill="#F7931E" />
        <path
          d="M882.306 259.339C894.934 229.66 891.56 199.809 874.769 192.665C857.978 185.52 834.129 203.788 821.501 233.466C808.873 263.144 812.247 292.995 829.038 300.14C845.828 307.284 869.677 289.017 882.306 259.339Z"
          fill={secondary}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M854.22 273L862.1 271.46L862.4 266.93L855.87 265.65V265.6C856.18 263.77 856.387 261.923 856.49 260.07L857.12 250.65L877.57 244.81L877.92 239.51L869.04 239.17L865.21 239.02L857.92 238.74L859 223C859.208 221.153 859.045 219.283 858.52 217.5C857.96 215.98 856.99 215.5 855.91 216.1C854.83 216.7 853.73 218.21 852.91 220.46C852.189 222.531 851.758 224.691 851.63 226.88L850.56 242.8L829.26 265.25L828.9 270.55L849.77 254.63L849.14 263.99C848.996 265.736 848.966 267.49 849.05 269.24L849.14 270.02L842.14 277.67L841.83 282.2L849.77 275.47V275.29L850.33 279.81C850.54 281.46 852.54 280.4 852.99 278.41L854.22 273Z"
          fill={primary}
        />
      </g>
      <defs>
        <linearGradient
          id={randomIDLinear}
          x1="1091.97"
          y1="640.45"
          x2="1826.18"
          y2="1012.42"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#BAC7D5" />
          <stop offset="0.04" stopColor="#BAC7D5" stopOpacity="0.96" />
          <stop offset="1" stopColor="#BAC7D5" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id={randomIDLinear2}
          x1="324.16"
          y1="369.19"
          x2="1669.8"
          y2="1173.06"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#009882" />
          <stop offset="1" stopColor="#01A891" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id={randomIDLinear3}
          x1="1336.18"
          y1="1160.61"
          x2="301.9"
          y2="619.57"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#BAC7D5" stopOpacity="0" />
          <stop offset="0.5" stopColor="#BAC7D5" />
          <stop offset="1" stopColor="#BAC7D5" stopOpacity="0" />
        </linearGradient>
      </defs>
    </IllustrationWrapper>
  );
};

export default SmartPassV1;
