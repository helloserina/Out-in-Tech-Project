/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

// Wait for the deviceready event before using any of Cordova's device APIs.
// See https://cordova.apache.org/docs/en/latest/cordova/events/events.html#deviceready

let numberOfKeywords = 10

document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    // Cordova is now initialized. Have fun!

    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
    document.getElementById('deviceready').classList.add('ready');
    insertKeywordCards()
}

function insertKeywordCards() {
    document.getElementById('column-start').appendChild(createKeywordCard())
}

function createKeywordCard() {
    const divWrapper = document.createElement('div').classList.add('card text-center align-items-center');
    divWrapper.style.width = '70%'
    const img = document.createElement('img').src = "../www/img/boxed_water_unsplash.jpg"
    img.classList.add("card-img-top")
    const cardBody = document.createElement('div').classList.add("card-body text-center")
    const title = document.createElement('h5').classList.add('card-title')
    title.innerHTML = "Alzheimer's Disease" // insert given text
    const description = document.createElement('p').classList.add('card-text')
    // insert given description
    description.innerHTML = "Alzheimer's disease is a brain disorder that slowly destroys memory and thinking skills and, eventually, the ability to carry out the simplest tasks"
    const button = document.createElement('a').classList.add('btn btn-primary')
    // button links to nothing at the moment
    button.innerHTML = 'Read more'
    // must add an id to the divWrapper to identify a particular keyword/subject

    cardBody.appendChild(title)
    cardBody.appendChild(description)
    cardBody.appendChild(button)

    divWrapper.appendChild(img)
    divWrapper.appendChild(cardBody)

    return divWrapper
}