/*  Aeppelkaka, a program which can help a stundent learning facts.
 *  Copyright (C) 2021, 2023, 2024 Christian von Schultz
 *
 *  Permission is hereby granted, free of charge, to any person
 *  obtaining a copy of this software and associated documentation
 *  files (the “Software”), to deal in the Software without
 *  restriction, including without limitation the rights to use, copy,
 *  modify, merge, publish, distribute, sublicense, and/or sell copies
 *  of the Software, and to permit persons to whom the Software is
 *  furnished to do so, subject to the following conditions:
 *
 *  The above copyright notice and this permission notice shall be
 *  included in all copies or substantial portions of the Software.
 *
 *  THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND,
 *  EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 *  MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 *  NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS
 *  BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
 *  ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 *  CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 *  SOFTWARE.
 *
 * SPDX-License-Identifier: MIT
 */
var now = new Date();
var event = new Date();
event.setSeconds((now.getSeconds() + 30) % 60);
event.setMinutes(now.getMinutes() + Math.floor((now.getSeconds() + 30)/60));

var seconds = (event-now) / 1000;
window.setTimeout("updateCountdown();", 1000);

export function updateCountdown()
{
    if (document.getElementById('seconds') && document.getElementById('hide30')) {
        now = new Date();
        seconds = Math.round((event-now) / 1000);
        document.getElementById('seconds').value = seconds;
        window.setTimeout("updateCountdown();", 1000);
        if (seconds <= 0) {
            document.getElementById('hide30').style.setProperty('display', 'none', null);
        }
    }
}
