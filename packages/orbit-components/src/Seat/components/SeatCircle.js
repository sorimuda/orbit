// @flow
import * as React from "react";
import styled from "styled-components";

import { useRandomIdSeed } from "../../hooks/useRandomId";
import useTheme from "../../hooks/useTheme";
import { SIZE_OPTIONS } from "../consts";
import type { Type, Size } from "..";
import { resolveCloseIconColor } from "./helpers";

type Props = {|
  type?: Type,
  size?: Size,
|};

const StyledCircleWrapper = styled.div`
  position: absolute;
  top: -10px;
  right: -10px;
`;

export const StyledCirclePath: any = styled.path``;

const SeatCircle = ({ size, type }: Props): React.Node => {
  const theme = useTheme();
  const randomId = useRandomIdSeed();
  const circleSmallId = randomId("circleSmallId");
  const circleNormalId = randomId("circleNormalId");

  return (
    <StyledCircleWrapper size={size}>
      {size === SIZE_OPTIONS.SMALL ? (
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
          <mask
            id={circleSmallId}
            maskUnits="userSpaceOnUse"
            x="0.666336"
            y="0.666992"
            width="21"
            height="21"
            fill="black"
          >
            <rect
              fill={theme.orbit.paletteWhite}
              x="0.666336"
              y="0.666992"
              width="21"
              height="21"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M10.9997 2.66699C15.583 2.66699 19.333 6.41699 19.333 11.0003C19.333 15.5837 15.583 19.3337 10.9997 19.3337C6.41634 19.3337 2.66634 15.5837 2.66634 11.0003C2.66634 6.41699 6.41634 2.66699 10.9997 2.66699ZM14.8796 7.11094C14.5865 6.81826 14.1116 6.81861 13.8189 7.11172L11.2351 9.69952L11.1824 9.7426C11.0529 9.8279 10.8771 9.81349 10.7633 9.69947L8.18072 7.11172C7.88805 6.81861 7.41317 6.81826 7.12006 7.11094L7.05289 7.18769C6.82893 7.4815 6.85099 7.90291 7.11928 8.1716L9.70496 10.762C9.83484 10.8921 9.83485 11.1029 9.70498 11.233L7.11928 13.8237C6.8266 14.1168 6.82695 14.5917 7.12006 14.8844C7.41317 15.1771 7.88805 15.1767 8.18072 14.8836L10.7632 12.2948C10.8941 12.1643 11.1051 12.1645 11.2352 12.2948L13.8189 14.8836C14.1116 15.1767 14.5865 15.1771 14.8796 14.8844L14.9468 14.8076C15.1707 14.5138 15.1487 14.0924 14.8804 13.8237L12.2943 11.233C12.1644 11.1029 12.1644 10.8921 12.2943 10.762L14.8804 8.1716C15.173 7.87849 15.1727 7.40361 14.8796 7.11094Z"
            />
          </mask>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10.9997 2.66699C15.583 2.66699 19.333 6.41699 19.333 11.0003C19.333 15.5837 15.583 19.3337 10.9997 19.3337C6.41634 19.3337 2.66634 15.5837 2.66634 11.0003C2.66634 6.41699 6.41634 2.66699 10.9997 2.66699ZM14.8796 7.11094C14.5865 6.81826 14.1116 6.81861 13.8189 7.11172L11.2351 9.69952L11.1824 9.7426C11.0529 9.8279 10.8771 9.81349 10.7633 9.69947L8.18072 7.11172C7.88805 6.81861 7.41317 6.81826 7.12006 7.11094L7.05289 7.18769C6.82893 7.4815 6.85099 7.90291 7.11928 8.1716L9.70496 10.762C9.83484 10.8921 9.83485 11.1029 9.70498 11.233L7.11928 13.8237C6.8266 14.1168 6.82695 14.5917 7.12006 14.8844C7.41317 15.1771 7.88805 15.1767 8.18072 14.8836L10.7632 12.2948C10.8941 12.1643 11.1051 12.1645 11.2352 12.2948L13.8189 14.8836C14.1116 15.1767 14.5865 15.1771 14.8796 14.8844L14.9468 14.8076C15.1707 14.5138 15.1487 14.0924 14.8804 13.8237L12.2943 11.233C12.1644 11.1029 12.1644 10.8921 12.2943 10.762L14.8804 8.1716C15.173 7.87849 15.1727 7.40361 14.8796 7.11094Z"
            fill={resolveCloseIconColor({ type, theme })}
          />
          <path
            d="M13.8189 7.11172L12.4037 5.69855L12.4036 5.6986L13.8189 7.11172ZM11.2351 9.69952L12.5001 11.2486L12.5787 11.1844L12.6504 11.1126L11.2351 9.69952ZM11.1824 9.7426L12.2827 11.4127L12.3681 11.3564L12.4474 11.2917L11.1824 9.7426ZM10.7633 9.69947L9.34765 11.1123L10.7633 9.69947ZM8.18072 7.11172L9.59636 5.69893L9.59598 5.69855L8.18072 7.11172ZM7.12006 7.11094L5.70689 5.69568L5.65934 5.74316L5.61509 5.79373L7.12006 7.11094ZM7.05289 7.18769L5.54791 5.87048L5.50333 5.92142L5.46229 5.97525L7.05289 7.18769ZM7.11928 8.1716L8.53479 6.75868L8.53454 6.75843L7.11928 8.1716ZM9.70496 10.762L11.1205 9.3491L9.70496 10.762ZM9.70498 11.233L8.28938 9.82015L9.70498 11.233ZM7.11928 13.8237L8.53454 15.2369L8.53488 15.2366L7.11928 13.8237ZM8.18072 14.8836L9.59598 16.2968L9.59665 16.2961L8.18072 14.8836ZM10.7632 12.2948L9.3504 10.8792L9.34731 10.8823L10.7632 12.2948ZM11.2352 12.2948L12.6508 10.8819L11.2352 12.2948ZM13.8189 14.8836L12.4033 16.2964L12.4037 16.2968L13.8189 14.8836ZM14.8796 14.8844L16.2928 16.2996L16.3403 16.2522L16.3846 16.2016L14.8796 14.8844ZM14.9468 14.8076L16.4517 16.1248L16.4963 16.0739L16.5374 16.0201L14.9468 14.8076ZM14.8804 13.8237L13.4649 15.2367L13.4651 15.2369L14.8804 13.8237ZM12.2943 11.233L13.7097 9.82005L12.2943 11.233ZM12.2943 10.762L13.7097 12.175L12.2943 10.762ZM14.8804 8.1716L13.4651 6.75843L13.465 6.75856L14.8804 8.1716ZM10.9997 4.66699C14.4784 4.66699 17.333 7.52156 17.333 11.0003H21.333C21.333 5.31242 16.6876 0.666992 10.9997 0.666992V4.66699ZM17.333 11.0003C17.333 14.4791 14.4784 17.3337 10.9997 17.3337V21.3337C16.6876 21.3337 21.333 16.6882 21.333 11.0003H17.333ZM10.9997 17.3337C7.52091 17.3337 4.66634 14.4791 4.66634 11.0003H0.666336C0.666336 16.6882 5.31177 21.3337 10.9997 21.3337V17.3337ZM4.66634 11.0003C4.66634 7.52156 7.52091 4.66699 10.9997 4.66699V0.666992C5.31177 0.666992 0.666336 5.31242 0.666336 11.0003H4.66634ZM16.2928 5.69568C15.218 4.62253 13.4768 4.62382 12.4037 5.69855L15.2342 8.52489C14.7464 9.0134 13.9549 9.01399 13.4664 8.52619L16.2928 5.69568ZM12.4036 5.6986L9.81981 8.2864L12.6504 11.1126L15.2342 8.52484L12.4036 5.6986ZM9.97007 8.15043L9.91732 8.19351L12.4474 11.2917L12.5001 11.2486L9.97007 8.15043ZM10.082 8.07248C10.7301 7.64554 11.6083 7.71493 12.1789 8.28667L9.34765 11.1123C10.1458 11.912 11.3757 12.0103 12.2827 11.4127L10.082 8.07248ZM12.1789 8.28667L9.59636 5.69893L6.76509 8.52451L9.34765 11.1123L12.1789 8.28667ZM9.59598 5.69855C8.52283 4.62382 6.78163 4.62253 5.70689 5.69568L8.53323 8.52619C8.04472 9.01399 7.25326 9.0134 6.76547 8.52489L9.59598 5.69855ZM5.61509 5.79373L5.54791 5.87048L8.55786 8.5049L8.62504 8.42815L5.61509 5.79373ZM5.46229 5.97525C4.63993 7.05411 4.71915 8.59844 5.70402 9.58477L8.53454 6.75843C8.98284 7.20739 9.01793 7.90889 8.64348 8.40013L5.46229 5.97525ZM5.70377 9.58451L8.28945 12.1749L11.1205 9.3491L8.53479 6.75868L5.70377 9.58451ZM8.28945 12.1749C7.64005 11.5243 7.64001 10.4708 8.28938 9.82015L11.1206 12.6458C12.0297 11.7349 12.0296 10.2599 11.1205 9.3491L8.28945 12.1749ZM8.28938 9.82015L5.70369 12.4109L8.53488 15.2366L11.1206 12.6458L8.28938 9.82015ZM5.70402 12.4106C4.63088 13.4853 4.63216 15.2265 5.70689 16.2996L8.53323 13.4691C9.02175 13.9569 9.02233 14.7484 8.53454 15.2369L5.70402 12.4106ZM5.70689 16.2996C6.78163 17.3728 8.52283 17.3715 9.59598 16.2968L6.76547 13.4704C7.25326 12.9819 8.04472 12.9813 8.53323 13.4691L5.70689 16.2996ZM9.59665 16.2961L12.1792 13.7073L9.34731 10.8823L6.7648 13.4711L9.59665 16.2961ZM12.1761 13.7104C11.5271 14.3581 10.4718 14.3611 9.81956 13.7076L12.6508 10.8819C11.7384 9.96782 10.261 9.9704 9.3504 10.8792L12.1761 13.7104ZM9.81956 13.7076L12.4033 16.2964L15.2345 13.4708L12.6508 10.8819L9.81956 13.7076ZM12.4037 16.2968C13.4768 17.3715 15.218 17.3728 16.2928 16.2996L13.4664 13.4691C13.9549 12.9813 14.7464 12.9819 15.2342 13.4704L12.4037 16.2968ZM16.3846 16.2016L16.4517 16.1248L13.4418 13.4904L13.3746 13.5672L16.3846 16.2016ZM16.5374 16.0201C17.3597 14.9412 17.2805 13.3969 16.2956 12.4106L13.4651 15.2369C13.0168 14.7879 12.9817 14.0864 13.3562 13.5952L16.5374 16.0201ZM16.2958 12.4108L13.7097 9.82005L10.8788 12.646L13.4649 15.2367L16.2958 12.4108ZM13.7097 9.82005C14.3592 10.4707 14.3592 11.5244 13.7097 12.175L10.8789 9.34896C9.96953 10.2598 9.96948 11.735 10.8788 12.646L13.7097 9.82005ZM13.7097 12.175L16.2958 9.58464L13.465 6.75856L10.8789 9.34896L13.7097 12.175ZM16.2956 9.58477C17.3688 8.51003 17.3675 6.76883 16.2928 5.69568L13.4664 8.52619C12.9779 8.0384 12.9773 7.24694 13.4651 6.75843L16.2956 9.58477Z"
            fill={theme.orbit.paletteWhite}
            mask={`url(#${circleSmallId})`}
          />
        </svg>
      ) : (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <mask
            id={circleNormalId}
            maskUnits="userSpaceOnUse"
            x="-0.000396729"
            y="0.000396729"
            width="24"
            height="24"
            fill="black"
          >
            <rect
              fill={theme.orbit.paletteWhite}
              x="-0.000396729"
              y="0.000396729"
              width="24"
              height="24"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M11.9996 2.0004C17.4996 2.0004 21.9996 6.5004 21.9996 12.0004C21.9996 17.5004 17.4996 22.0004 11.9996 22.0004C6.4996 22.0004 1.9996 17.5004 1.9996 12.0004C1.9996 6.5004 6.4996 2.0004 11.9996 2.0004ZM16.6555 7.33313C16.3038 6.98192 15.7339 6.98234 15.3827 7.33407L12.2821 10.4394L12.2188 10.4911C12.0635 10.5935 11.8525 10.5762 11.7159 10.4394L8.61687 7.33407C8.26566 6.98234 7.69581 6.98192 7.34408 7.33313L7.26346 7.42524C6.99472 7.7778 7.02119 8.2835 7.34314 8.60592L10.446 11.7144C10.6018 11.8706 10.6018 12.1234 10.446 12.2796L7.34314 15.3885C6.99193 15.7402 6.99235 16.3101 7.34408 16.6613C7.69581 17.0125 8.26566 17.0121 8.61687 16.6603L11.7159 13.5538C11.8729 13.3971 12.1261 13.3974 12.2822 13.5537L15.3827 16.6603C15.7339 17.0121 16.3038 17.0125 16.6555 16.6613L16.7361 16.5692C17.0049 16.2166 16.9784 15.7109 16.6564 15.3885L13.5531 12.2796C13.3972 12.1234 13.3972 11.8706 13.5531 11.7144L16.6564 8.60592C17.0077 8.25419 17.0072 7.68434 16.6555 7.33313Z"
            />
          </mask>
          <StyledCirclePath
            type={type}
            fillRule="evenodd"
            clipRule="evenodd"
            d="M11.9996 2.0004C17.4996 2.0004 21.9996 6.5004 21.9996 12.0004C21.9996 17.5004 17.4996 22.0004 11.9996 22.0004C6.4996 22.0004 1.9996 17.5004 1.9996 12.0004C1.9996 6.5004 6.4996 2.0004 11.9996 2.0004ZM16.6555 7.33313C16.3038 6.98192 15.7339 6.98234 15.3827 7.33407L12.2821 10.4394L12.2188 10.4911C12.0635 10.5935 11.8525 10.5762 11.7159 10.4394L8.61687 7.33407C8.26566 6.98234 7.69581 6.98192 7.34408 7.33313L7.26346 7.42524C6.99472 7.7778 7.02119 8.2835 7.34314 8.60592L10.446 11.7144C10.6018 11.8706 10.6018 12.1234 10.446 12.2796L7.34314 15.3885C6.99193 15.7402 6.99235 16.3101 7.34408 16.6613C7.69581 17.0125 8.26566 17.0121 8.61687 16.6603L11.7159 13.5538C11.8729 13.3971 12.1261 13.3974 12.2822 13.5537L15.3827 16.6603C15.7339 17.0121 16.3038 17.0125 16.6555 16.6613L16.7361 16.5692C17.0049 16.2166 16.9784 15.7109 16.6564 15.3885L13.5531 12.2796C13.3972 12.1234 13.3972 11.8706 13.5531 11.7144L16.6564 8.60592C17.0077 8.25419 17.0072 7.68434 16.6555 7.33313Z"
            fill={resolveCloseIconColor({ type, theme })}
          />
          <path
            d="M15.3827 7.33407L13.9675 5.9209L13.9674 5.92095L15.3827 7.33407ZM12.2821 10.4394L13.5472 11.9885L13.6257 11.9244L13.6974 11.8526L12.2821 10.4394ZM12.2188 10.4911L13.3191 12.1613L13.4046 12.1049L13.4839 12.0402L12.2188 10.4911ZM11.7159 10.4394L10.3003 11.8522L11.7159 10.4394ZM8.61687 7.33407L10.0325 5.92128L10.0321 5.9209L8.61687 7.33407ZM7.34408 7.33313L5.93091 5.91787L5.88336 5.96536L5.8391 6.01592L7.34408 7.33313ZM7.26346 7.42524L5.75848 6.10803L5.7139 6.15896L5.67287 6.2128L7.26346 7.42524ZM7.34314 8.60592L8.75865 7.19301L8.75839 7.19275L7.34314 8.60592ZM10.446 11.7144L11.8615 10.3015L10.446 11.7144ZM10.446 12.2796L9.03038 10.8667H9.03038L10.446 12.2796ZM7.34314 15.3885L8.75839 16.8017L8.75873 16.8013L7.34314 15.3885ZM8.61687 16.6603L10.0321 18.0735L10.0328 18.0728L8.61687 16.6603ZM11.7159 13.5538L10.303 12.1382L10.3 12.1413L11.7159 13.5538ZM12.2822 13.5537L13.6978 12.1409V12.1409L12.2822 13.5537ZM15.3827 16.6603L13.9671 18.0732L13.9675 18.0735L15.3827 16.6603ZM16.6555 16.6613L18.0687 18.0765L18.1162 18.029L18.1605 17.9785L16.6555 16.6613ZM16.7361 16.5692L18.2411 17.8864L18.2857 17.8354L18.3267 17.7816L16.7361 16.5692ZM16.6564 15.3885L15.241 16.8014L15.2412 16.8017L16.6564 15.3885ZM13.5531 12.2796L14.9686 10.8667L13.5531 12.2796ZM13.5531 11.7144L14.9685 13.1274L13.5531 11.7144ZM16.6564 8.60592L15.2412 7.19275L15.2411 7.19288L16.6564 8.60592ZM11.9996 4.0004C16.395 4.0004 19.9996 7.60497 19.9996 12.0004H23.9996C23.9996 5.39583 18.6042 0.000396729 11.9996 0.000396729V4.0004ZM19.9996 12.0004C19.9996 16.3958 16.395 20.0004 11.9996 20.0004V24.0004C18.6042 24.0004 23.9996 18.605 23.9996 12.0004H19.9996ZM11.9996 20.0004C7.60417 20.0004 3.9996 16.3958 3.9996 12.0004H-0.000396729C-0.000396729 18.605 5.39503 24.0004 11.9996 24.0004V20.0004ZM3.9996 12.0004C3.9996 7.60497 7.60417 4.0004 11.9996 4.0004V0.000396729C5.39503 0.000396729 -0.000396729 5.39583 -0.000396729 12.0004H3.9996ZM18.0687 5.91787C16.9353 4.78619 15.0991 4.78755 13.9675 5.9209L16.798 8.74724C16.3687 9.17713 15.6722 9.17765 15.2423 8.74839L18.0687 5.91787ZM13.9674 5.92095L10.8668 9.02631L13.6974 11.8526L16.798 8.7472L13.9674 5.92095ZM11.0171 8.89035L10.9538 8.94204L13.4839 12.0402L13.5472 11.9885L11.0171 8.89035ZM11.1185 8.82101C11.7407 8.41113 12.5837 8.47763 13.1316 9.02657L10.3003 11.8522C11.1212 12.6747 12.3863 12.7758 13.3191 12.1613L11.1185 8.82101ZM13.1316 9.02657L10.0325 5.92128L7.20124 8.74686L10.3003 11.8522L13.1316 9.02657ZM10.0321 5.9209C8.90044 4.78755 7.06426 4.78619 5.93091 5.91787L8.75725 8.74839C8.32735 9.17765 7.63087 9.17713 7.20161 8.74724L10.0321 5.9209ZM5.8391 6.01592L5.75848 6.10803L8.76844 8.74244L8.84906 8.65034L5.8391 6.01592ZM5.67287 6.2128C4.80572 7.35041 4.88935 8.97902 5.92788 10.0191L8.75839 7.19275C9.15304 7.58798 9.18372 8.20519 8.85406 8.63767L5.67287 6.2128ZM5.92763 10.0188L9.03045 13.1273L11.8615 10.3015L8.75865 7.19301L5.92763 10.0188ZM9.03045 13.1273C8.40702 12.5028 8.40698 11.4914 9.03038 10.8667L11.8616 13.6924C12.7967 12.7555 12.7966 11.2384 11.8615 10.3015L9.03045 13.1273ZM9.03038 10.8667L5.92754 13.9757L8.75873 16.8013L11.8616 13.6924L9.03038 10.8667ZM5.92788 13.9753C4.7962 15.1087 4.79755 16.9448 5.93091 18.0765L8.75725 15.246C9.18714 15.6753 9.18765 16.3718 8.75839 16.8017L5.92788 13.9753ZM5.93091 18.0765C7.06426 19.2082 8.90044 19.2069 10.0321 18.0735L7.20161 15.2472C7.63087 14.8173 8.32735 14.8168 8.75725 15.246L5.93091 18.0765ZM10.0328 18.0728L13.1318 14.9663L10.3 12.1413L7.20094 15.2478L10.0328 18.0728ZM13.1287 14.9694C12.5059 15.591 11.4928 15.594 10.8666 14.9666L13.6978 12.1409C12.7594 11.2007 11.2398 11.2033 10.303 12.1382L13.1287 14.9694ZM10.8666 14.9666L13.9671 18.0732L16.7983 15.2475L13.6978 12.1409L10.8666 14.9666ZM13.9675 18.0735C15.0991 19.2069 16.9353 19.2082 18.0687 18.0765L15.2423 15.246C15.6722 14.8168 16.3687 14.8173 16.798 15.2472L13.9675 18.0735ZM18.1605 17.9785L18.2411 17.8864L15.2311 15.252L15.1505 15.3441L18.1605 17.9785ZM18.3267 17.7816C19.1939 16.644 19.1102 15.0154 18.0717 13.9753L15.2412 16.8017C14.8465 16.4064 14.8159 15.7892 15.1455 15.3567L18.3267 17.7816ZM18.0719 13.9755L14.9686 10.8667L12.1376 13.6926L15.241 16.8014L18.0719 13.9755ZM14.9686 10.8667C15.5921 11.4913 15.5921 12.5028 14.9685 13.1274L12.1377 10.3014C11.2024 11.2383 11.2024 12.7556 12.1376 13.6926L14.9686 10.8667ZM14.9685 13.1274L18.0718 10.019L15.2411 7.19288L12.1377 10.3014L14.9685 13.1274ZM18.0717 10.0191C19.2034 8.88574 19.202 7.04956 18.0687 5.91787L15.2423 8.74839C14.8124 8.31913 14.8119 7.62265 15.2412 7.19275L18.0717 10.0191Z"
            fill={theme.orbit.paletteWhite}
            mask={`url(#${circleNormalId})`}
          />
        </svg>
      )}
    </StyledCircleWrapper>
  );
};

export default SeatCircle;
