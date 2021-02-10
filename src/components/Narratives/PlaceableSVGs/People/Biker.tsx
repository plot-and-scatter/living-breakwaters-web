import React from 'react'

import { viewBox } from '../PlaceableSVGHelper'
import PlaceableSVG from '../PlaceableSVG'
import PlaceableSVGProps from '../../../../@types/PlaceableSVGProps'

const Biker = (props: PlaceableSVGProps): JSX.Element => {
  return (
    <PlaceableSVG viewBox={viewBox(0, 0, 8, 10)} defaultScale={0.5} {...props}>
      <g className="cls-2">
        <g clipPath="url(#clip-path-3)" opacity=".3">
          <path
            className="cls-5"
            d="M697.24 418.23c0 .19.09.27.3.26a.11.11 0 01.11 0c0 .06.09.05.16 0a1.69 1.69 0 011.41.22 2.16 2.16 0 01.76.8 2.38 2.38 0 01.33 1.33 2 2 0 01-.29 1 1.59 1.59 0 01-1 .74 1.64 1.64 0 01-1-.12 2.12 2.12 0 01-.81-.63c-.09-.11-.16-.23-.23-.33l-.16-.07c-.24 0-.48 0-.72-.09a.76.76 0 01-.08.47.42.42 0 01-.45.23h-.1a3.24 3.24 0 01-.13.33 1.31 1.31 0 01-.67.66 1.12 1.12 0 01-.93 0 1.84 1.84 0 01-.8-.76 2.35 2.35 0 01-.33-.95 2 2 0 01.26-1.39 1.17 1.17 0 01.71-.53 1.08 1.08 0 01.73.05l.17-.09.09-.21.14-.18s.07 0 .09-.06a2.47 2.47 0 00.28-.28v-.16l.68-1 1.55.77m1 2.57c0-.07-.05-.09-.14-.05l-.57.24c.06 0 .12.07.1.13s-.09.07-.14.1h-.05l-.12.11-.21.09.32.42h.06a.54.54 0 00.09.12 1.5 1.5 0 00.4.28v-.16-.05.12c0 .07 0 .11.06.13l.46.12a1.07 1.07 0 00.53-.05c-.06-.32-.11-.63-.17-.94l.18.93a1.32 1.32 0 00.71-.53l-.07-.07h.08a1.8 1.8 0 00.28-1.09h-.12.14v-.09-.08c-.05-.21-.1-.42-.17-.63a3.72 3.72 0 00-.21-.39c-.05-.07-.08-.06-.15 0l.06-.13a1.89 1.89 0 00-.56-.48v.08-.1a1.79 1.79 0 00-.64-.21l.06.47a.29.29 0 010-.1 3.11 3.11 0 010-.32s0-.06-.07 0a1 1 0 00-.45 0v.09h-.17a.1.1 0 000 .13c.13.19.24.38.36.57l.26.4a.28.28 0 010-.1v-.08c0 .15 0 .29.12.4l.05-.05a.19.19 0 00.13.23v-.3-.38.26-.05a.44.44 0 000 .28 2 2 0 010 .24v.1c.08-.05.12-.1.08-.16l.07-.14-.07.12c0 .08-.09.16 0 .22l-.09.07.13.11h-.09l.12.37v.25a.64.64 0 01-.06-.18.22.22 0 00-.1-.18h.07a1.36 1.36 0 010-.17c0-.08 0-.12-.13-.12h.11v-.11l-.22.09h.13-.09c-.06 0-.07 0 0 .06h-.1c.07.28.14.55.21.8-.07-.22-.13-.44-.2-.66a.12.12 0 000-.05v-.05l-.11.05m-3.41 1.51h.05a.78.78 0 010-.14v-.07c0-.01.1-.08.06-.15a3.72 3.72 0 01-.19-.34c0-.08-.08-.09-.16-.05l-.21.11-.29-.15c0 .07.1.15.09.22a.71.71 0 000 .26c0 .05 0 .08.08.08l-.05.05q.09.35.18.72h.06a1.26 1.26 0 00.33-.36v-.14h.07v-.08m-.18-1.83c0-.13-.08-.22-.15-.32a1.11 1.11 0 00-.12.42c0 .06 0 .13.07.15a.31.31 0 000 .28l.28-.09c.07 0 .09 0 .07-.1l-.09-.27h-.07zm-.59 1.24a.19.19 0 00-.14-.25v.16c0 .05-.06-.05-.08 0a.16.16 0 00-.13-.15v.17-.06.06a2.45 2.45 0 00.08.29.87.87 0 00.07.17h.08-.19a.15.15 0 01-.13-.12 1.13 1.13 0 000-.18v-.05c-.11 0-.22.06-.26.17 0-.08 0-.11-.22-.12v-.08-.06a.19.19 0 000-.07v-.09a2.67 2.67 0 01.12-.24h-.11c.14 0 .18-.11.1-.21s-.12-.11-.18-.17.12 0 .17.06 0 .11.07.17a.41.41 0 010-.11h.06l.09-.24v-.11a.51.51 0 000-.09v-.2.11a.53.53 0 01.22-.27.47.47 0 00.18-.12 1.32 1.32 0 00.13-.27h-.19c-.02 0 0-.12 0-.19a.88.88 0 00-.77.05s-.1 0-.07.1a1.29 1.29 0 00-.17.16.19.19 0 000 .08.16.16 0 00-.05.19l.06.09-.1-.16c-.05.13-.1.24-.13.35a.83.83 0 000 .22 1.16 1.16 0 000 .18 2.12 2.12 0 00.13 1c0 .09.08.18.12.27L693 422v.13a4.73 4.73 0 00.28.39l.08.06v.09a.27.27 0 00.08.07l.34.2v-.26a.65.65 0 010 .19v.06a.8.8 0 00.53 0h.14l-.1-.24c0 .07.07.14.11.22a.14.14 0 000-.11c0-.2-.1-.4-.14-.6s0-.08-.1-.08.07 0 .07-.06-.07-.25-.11-.37m3.72-1.51c0 .07 0 .14.07.21s.09.12.2.1 0-.15-.11-.23h.08l-.72-1.13a.14.14 0 000 .06c.1.22.2.45.31.67s.11.2.17.3m-1-.49h-.07a2 2 0 00-.09.8h.05-.09.07c-.08 0 0 0 0 .08l.33.21a.3.3 0 00.33 0l.38-.17.13-.06-.2-.05a.39.39 0 00-.06-.13.68.68 0 00-.15 0h.15q-.1-.18-.21-.33a.12.12 0 000-.08c0-.11-.11-.17-.21-.22h.12c-.1-.23-.21-.45-.31-.68l-.21.39v.07m-.76-1.09l-.44.18a.18.18 0 00-.07.05c-.19.24-.38.48-.58.71a.22.22 0 000 .33l.05-.12c0-.11.09-.13.19-.07l.25.19a1.36 1.36 0 01.39-.63.08.08 0 000-.05c.05-.18.09-.37.14-.57m.66.72a.85.85 0 00.25-.52 1 1 0 00-.23.57m-2.03 1.8a.24.24 0 000 .08v.06h.16a1.61 1.61 0 00.12-.23l-.34.12m1.45.23v-.36l-.14.32h.21m0-2.87l-.18-.12a1.48 1.48 0 000 .19l.21-.07"
            transform="translate(-692.39 -413.3)"
          />
          <path
            className="cls-6"
            d="M697.24 418.23c0 .19.09.27.3.26a.11.11 0 01.11 0c0 .06.09.05.16 0a1.69 1.69 0 011.41.22 2.16 2.16 0 01.76.8 2.38 2.38 0 01.33 1.33 2 2 0 01-.29 1 1.59 1.59 0 01-1 .74 1.64 1.64 0 01-1-.12 2.12 2.12 0 01-.81-.63c-.09-.11-.16-.23-.23-.33l-.16-.07c-.24 0-.48 0-.72-.09a.76.76 0 01-.08.47.42.42 0 01-.45.23h-.1a3.24 3.24 0 01-.13.33 1.31 1.31 0 01-.67.66 1.12 1.12 0 01-.93 0 1.84 1.84 0 01-.8-.76 2.35 2.35 0 01-.33-.95 2 2 0 01.26-1.39 1.17 1.17 0 01.71-.53 1.08 1.08 0 01.73.05l.17-.09.09-.21.14-.18s.07 0 .09-.06a2.47 2.47 0 00.28-.28v-.16l.68-1zm1 2.57c0-.07-.05-.09-.14-.05l-.57.24c.06 0 .12.07.1.13s-.09.07-.14.1h-.05l-.12.11-.21.09.32.42h.06a.54.54 0 00.09.12 1.5 1.5 0 00.4.28v-.16-.05.12c0 .07 0 .11.06.13l.46.12a1.07 1.07 0 00.53-.05c-.06-.32-.11-.63-.17-.94l.18.93a1.32 1.32 0 00.71-.53l-.07-.07h.08a1.8 1.8 0 00.28-1.09h-.12.14v-.09-.08c-.05-.21-.1-.42-.17-.63a3.72 3.72 0 00-.21-.39c-.05-.07-.08-.06-.15 0l.06-.13a1.89 1.89 0 00-.56-.48v.08-.1a1.79 1.79 0 00-.64-.21l.06.47a.29.29 0 010-.1 3.11 3.11 0 010-.32s0-.06-.07 0a1 1 0 00-.45 0v.09h-.17a.1.1 0 000 .13c.13.19.24.38.36.57l.26.4a.28.28 0 010-.1v-.08c0 .15 0 .29.12.4l.05-.05a.19.19 0 00.13.23v-.3-.38.26-.05a.44.44 0 000 .28 2 2 0 010 .24v.1c.08-.05.12-.1.08-.16l.07-.14-.07.12c0 .08-.09.16 0 .22l-.09.07.13.11h-.09l.12.37v.25a.64.64 0 01-.06-.18.22.22 0 00-.1-.18h.07a1.36 1.36 0 010-.17c0-.08 0-.12-.13-.12h.11v-.11l-.22.09h.13-.09c-.06 0-.07 0 0 .06h-.1c.07.28.14.55.21.8-.07-.22-.13-.44-.2-.66a.12.12 0 000-.05v-.05zm-3.24 1.45h.05a.78.78 0 010-.14v-.07c0-.01.1-.08.06-.15a3.72 3.72 0 01-.19-.34c0-.08-.08-.09-.16-.05l-.21.11-.29-.15c0 .07.1.15.09.22a.71.71 0 000 .26c0 .05 0 .08.08.08l-.05.05q.09.35.18.72h.06a1.26 1.26 0 00.33-.36v-.14h.07zm-.18-1.83c0-.13-.08-.22-.15-.32a1.11 1.11 0 00-.12.42c0 .06 0 .13.07.15a.31.31 0 000 .28l.28-.09c.07 0 .09 0 .07-.1l-.09-.27h-.07zm-.59 1.24a.19.19 0 00-.14-.25v.16c0 .05-.06-.05-.08 0a.16.16 0 00-.13-.15v.17-.06.06a2.45 2.45 0 00.08.29.87.87 0 00.07.17h.08-.19a.15.15 0 01-.13-.12 1.13 1.13 0 000-.18v-.05c-.11 0-.22.06-.26.17 0-.08 0-.11-.22-.12v-.08-.06a.19.19 0 000-.07v-.09a2.67 2.67 0 01.12-.24h-.11c.14 0 .18-.11.1-.21s-.12-.11-.18-.17.12 0 .17.06 0 .11.07.17a.41.41 0 010-.11h.06l.09-.24v-.11a.51.51 0 000-.09v-.2.11a.53.53 0 01.22-.27.47.47 0 00.18-.12 1.32 1.32 0 00.13-.27h-.19c-.02 0 0-.12 0-.19a.88.88 0 00-.77.05s-.1 0-.07.1a1.29 1.29 0 00-.17.16.19.19 0 000 .08.16.16 0 00-.05.19l.06.09-.1-.16c-.05.13-.1.24-.13.35a.83.83 0 000 .22 1.16 1.16 0 000 .18 2.12 2.12 0 00.13 1c0 .09.08.18.12.27l.01-.1v.13a4.73 4.73 0 00.28.39l.08.06v.09a.27.27 0 00.08.07l.34.2v-.26a.65.65 0 010 .19v.06a.8.8 0 00.53 0h.14l-.1-.24c0 .07.07.14.11.22a.14.14 0 000-.11c0-.2-.1-.4-.14-.6s0-.08-.1-.08.07 0 .07-.06.02-.28-.02-.4zm3.72-1.51c0 .07 0 .14.07.21s.09.12.2.1 0-.15-.11-.23h.08l-.72-1.13a.14.14 0 000 .06c.1.22.2.45.31.67s.15.22.22.32zm-1-.49h-.07a2 2 0 00-.09.8h.05-.09.07c-.08 0 0 0 0 .08l.33.21a.3.3 0 00.33 0l.38-.17.13-.06-.2-.05a.39.39 0 00-.06-.13.68.68 0 00-.15 0h.15q-.1-.18-.21-.33a.12.12 0 000-.08c0-.11-.11-.17-.21-.22h.12c-.1-.23-.21-.45-.31-.68l-.21.39s.09.22.09.24zm-.76-1.09l-.44.18a.18.18 0 00-.07.05c-.19.24-.38.48-.58.71a.22.22 0 000 .33l.05-.12c0-.11.09-.13.19-.07l.25.19a1.36 1.36 0 01.39-.63.08.08 0 000-.05c.13-.16.17-.39.22-.59zm.66.72a.85.85 0 00.25-.52 1 1 0 00-.24.52zm-2.17 1.71a.24.24 0 000 .08v.06h.16a1.61 1.61 0 00.12-.23zm1.45.23v-.36l-.14.32zm0-2.87l-.18-.12a1.48 1.48 0 000 .19z"
            transform="translate(-692.39 -413.3)"
          />
          <path
            className="cls-5"
            d="M697.24 418.23l-1.55-.77-1.08-.55-.93-.46a3.09 3.09 0 01.14-.32 1.55 1.55 0 01.12-.22c0-.06.08-.12 0-.15a.1.1 0 010-.09 1.86 1.86 0 01.29-.27 6.52 6.52 0 01.72-.43 5.18 5.18 0 01.65-.26 2.21 2.21 0 01.56-.15 1 1 0 00.46-.14c-.06-.16-.14-.32-.19-.48s0-.16-.1-.21a.45.45 0 01.12-.06c.24-.09.49-.19.74-.27a.31.31 0 01.13 0 1.31 1.31 0 01.76.32.78.78 0 01.15.22s0 .11-.08.14-.06.05 0 .11a.29.29 0 010 .18.14.14 0 000 .14c.06.07 0 .09-.05.14a.6.6 0 00-.12.11 1.64 1.64 0 010 .22s-.07.05-.12.08c.14.26 0 .55.08.82a1.44 1.44 0 00.21.6c0 .05.11.08.16.13l.22.2a.79.79 0 00.72.25c.2 0 .29.08.23.25a.56.56 0 00.1.5v.09a.28.28 0 01-.21-.15.73.73 0 01-.09-.22c-.07.08-.18.11-.17.25a.91.91 0 01-.13.37c0 .06-.12.09-.19.12l-.24.13h-.09a.1.1 0 010-.07l.19-.09a.43.43 0 00.25-.53c0-.14-.17-.2-.39-.19a4.79 4.79 0 00-1 .18c-.15 0-.17.08-.14.21a.59.59 0 010 .13.31.31 0 00.1.24l.06.08-.21-.15-.07.05m1.22-1l-.17-.09-.49-.23a.53.53 0 01-.28-.29c-.06-.2-.11-.4-.16-.61s-.07-.25-.1-.39l-.09.05-.55.39a1.59 1.59 0 01-.6.25.19.19 0 00-.15.11c-.07.11-.07.19 0 .26a3.13 3.13 0 00.7.6h.61v.06h.25l.51-.08.42-.07"
            transform="translate(-692.39 -413.3)"
          />
          <path
            className="cls-6"
            d="M697.24 418.23l-1.55-.77-1.08-.55-.93-.46a3.09 3.09 0 01.14-.32 1.55 1.55 0 01.12-.22c0-.06.08-.12 0-.15a.1.1 0 010-.09 1.86 1.86 0 01.29-.27 6.52 6.52 0 01.72-.43 5.18 5.18 0 01.65-.26 2.21 2.21 0 01.56-.15 1 1 0 00.46-.14c-.06-.16-.14-.32-.19-.48s0-.16-.1-.21a.45.45 0 01.12-.06c.24-.09.49-.19.74-.27a.31.31 0 01.13 0 1.31 1.31 0 01.76.32.78.78 0 01.15.22s0 .11-.08.14-.06.05 0 .11a.29.29 0 010 .18.14.14 0 000 .14c.06.07 0 .09-.05.14a.6.6 0 00-.12.11 1.64 1.64 0 010 .22s-.07.05-.12.08c.14.26 0 .55.08.82a1.44 1.44 0 00.21.6c0 .05.11.08.16.13l.22.2a.79.79 0 00.72.25c.2 0 .29.08.23.25a.56.56 0 00.1.5v.09a.28.28 0 01-.21-.15.73.73 0 01-.09-.22c-.07.08-.18.11-.17.25a.91.91 0 01-.13.37c0 .06-.12.09-.19.12l-.24.13h-.09a.1.1 0 010-.07l.19-.09a.43.43 0 00.25-.53c0-.14-.17-.2-.39-.19a4.79 4.79 0 00-1 .18c-.15 0-.17.08-.14.21a.59.59 0 010 .13.31.31 0 00.1.24l.06.08-.21-.15zm1.22-1l-.17-.09-.49-.23a.53.53 0 01-.28-.29c-.06-.2-.11-.4-.16-.61s-.07-.25-.1-.39l-.09.05-.55.39a1.59 1.59 0 01-.6.25.19.19 0 00-.15.11c-.07.11-.07.19 0 .26a3.13 3.13 0 00.7.6h.61v.06h.25l.51-.08z"
            transform="translate(-692.39 -413.3)"
          />
          <path
            className="cls-5"
            d="M693.68 416.45l.93.46 1.08.55-.68 1-.09-.06-.48-.34a2.09 2.09 0 01-.22-.2h-.07a.35.35 0 000 .12c.08.2.18.4.25.6s.19.26.23.42a1.15 1.15 0 00-.14.17c0-.06 0-.14-.12-.18s0-.12 0-.18l-.31-.69a.33.33 0 010-.06h-.25a.15.15 0 01-.11-.06.09.09 0 00-.12 0 .31.31 0 01-.32 0s-.06-.05-.05-.06a.18.18 0 01.07-.08.8.8 0 00.15 0l.55-.13a2.17 2.17 0 01-.23-.3 1.11 1.11 0 01-.09-.76.18.18 0 010-.07"
            transform="translate(-692.39 -413.3)"
          />
          <path
            className="cls-6"
            d="M693.68 416.45l.93.46 1.08.55-.68 1-.09-.06-.48-.34a2.09 2.09 0 01-.22-.2h-.07a.35.35 0 000 .12c.08.2.18.4.25.6s.19.26.23.42a1.15 1.15 0 00-.14.17c0-.06 0-.14-.12-.18s0-.12 0-.18l-.31-.69a.33.33 0 010-.06h-.25a.15.15 0 01-.11-.06.09.09 0 00-.12 0 .31.31 0 01-.32 0s-.06-.05-.05-.06a.18.18 0 01.07-.08.8.8 0 00.15 0l.55-.13a2.17 2.17 0 01-.23-.3 1.11 1.11 0 01-.09-.76.18.18 0 01.02-.22z"
            transform="translate(-692.39 -413.3)"
          />
          <path
            className="cls-5"
            d="M698.11 421l.09-.25v.14l.09-.08-.16.18"
            transform="translate(-692.39 -413.3)"
          />
          <path
            className="cls-6"
            d="M698.11 421l.09-.25v.14l.09-.08z"
            transform="translate(-692.39 -413.3)"
          />
          <path
            className="cls-5"
            d="M694.66 420.67c0-.11.15-.16.2-.25z"
            transform="translate(-692.39 -413.3)"
          />
          <path
            className="cls-6"
            d="M694.66 420.67c0-.11.15-.16.2-.25z"
            transform="translate(-692.39 -413.3)"
          />
          <path
            className="cls-5"
            d="M697.46 421.9l.39-.56.08-.12.08-.05c-.12.17-.23.33-.36.5l-.19.23"
            transform="translate(-692.39 -413.3)"
          />
          <path
            className="cls-6"
            d="M697.46 421.9l.39-.56.08-.12.08-.05c-.12.17-.23.33-.36.5z"
            transform="translate(-692.39 -413.3)"
          />
          <path
            className="cls-5"
            d="M698.79 422.26l-.2-.68.18.68"
            transform="translate(-692.39 -413.3)"
          />
          <path
            className="cls-6"
            d="M698.79 422.26l-.2-.68.18.68z"
            transform="translate(-692.39 -413.3)"
          />
          <path
            className="cls-5"
            d="M694.09 422.09l-.09-.18v-.17-.06a.54.54 0 00.08.39s.06 0 .09.07v.05l-.11-.05"
            transform="translate(-692.39 -413.3)"
          />
          <path
            className="cls-6"
            d="M694.09 422.09l-.09-.18v-.17-.06a.54.54 0 00.08.39s.06 0 .09.07v.05z"
            transform="translate(-692.39 -413.3)"
          />
          <path
            className="cls-5"
            d="M698.32 419.23v0"
            transform="translate(-692.39 -413.3)"
          />
          <path
            className="cls-6"
            d="M698.32 419.23v0z"
            transform="translate(-692.39 -413.3)"
          />
          <path
            className="cls-5"
            d="M698.31 418.68a1.36 1.36 0 010 .2 1.33 1.33 0 010 .28v-.48"
            transform="translate(-692.39 -413.3)"
          />
          <path
            className="cls-6"
            d="M698.31 418.68a1.36 1.36 0 010 .2 1.33 1.33 0 010 .28v-.48z"
            transform="translate(-692.39 -413.3)"
          />
          <path
            className="cls-5"
            d="M693.21 421.3l-.34.09.35-.08"
            transform="translate(-692.39 -413.3)"
          />
          <path
            className="cls-6"
            d="M693.21 421.3l-.34.09.35-.08z"
            transform="translate(-692.39 -413.3)"
          />
          <path
            className="cls-5"
            d="M693.44 420.32l.11.15a.33.33 0 000 .1l.07.18c-.07-.13-.14-.27-.22-.4"
            transform="translate(-692.39 -413.3)"
          />
          <path
            className="cls-6"
            d="M693.44 420.32l.11.15a.33.33 0 000 .1l.07.18c-.03-.16-.1-.3-.18-.43z"
            transform="translate(-692.39 -413.3)"
          />
          <path
            className="cls-5"
            d="M693.48 420.3l-.17-.38c0-.06 0-.13-.08-.19l.18.37a1.59 1.59 0 01.07.2"
            transform="translate(-692.39 -413.3)"
          />
          <path
            className="cls-6"
            d="M693.48 420.3l-.17-.38c0-.06 0-.13-.08-.19l.18.37a1.59 1.59 0 01.07.2z"
            transform="translate(-692.39 -413.3)"
          />
          <path
            className="cls-5"
            d="M693.72 420.21v-.37.37"
            transform="translate(-692.39 -413.3)"
          />
          <path
            className="cls-6"
            d="M693.72 420.21v-.37.37z"
            transform="translate(-692.39 -413.3)"
          />
          <path
            className="cls-5"
            d="M695 422.06h-.08l.06.13-.08-.09c0-.06-.1-.05-.16 0h-.3a2.26 2.26 0 01.45 0h.11"
            transform="translate(-692.39 -413.3)"
          />
          <path
            className="cls-6"
            d="M695 422.06h-.08l.06.13-.08-.09c0-.06-.1-.05-.16 0h-.3a2.26 2.26 0 01.45 0z"
            transform="translate(-692.39 -413.3)"
          />
        </g>
      </g>
    </PlaceableSVG>
  )
}

export default Biker