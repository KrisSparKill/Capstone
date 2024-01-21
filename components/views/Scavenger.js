import html from "html-literal";
import * as store from "../../store";

export default () => html`
  <main>
    <div id="fb-root"></div>
    <script
      async
      defer
      crossorigin="anonymous"
      src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v18.0&appId=685484360321956"
      nonce="UEHHwk49"
    ></script>
    <div class="${store.Global.selectedBrand} secondaryBkgrnd">
      <div class="${store.Global.selectedBrand} scavenger" id="scavengerHunt">
        <div class="${store.Global.selectedBrand} h1">
          Selfie/Photo Scavenger Hunt
        </div>
        <div class="${store.Global.selectedBrand} preCruise">
          <div class="${store.Global.selectedBrand} h2">Pre-Cruise</div>
          <div class="${store.Global.selectedBrand} h3">
            Keep that camera handy, and immortalize those moments, making the
            trip even more grand before it officially beings
          </div>
          <br />
          <div class="${store.Global.selectedBrand} p" id="box1">
            <input type="checkbox" class="box" />Luggage posed, your tickets
            close, snap that selfie before it goes!
          </div>
          <div class="${store.Global.selectedBrand} p" id="box2">
            <input type="checkbox" class="box" />Wings or wheels in motion's
            deal, grab that shot, your travel's seal.
          </div>
          <div class="${store.Global.selectedBrand} p" id="box3">
            <input type="checkbox" class="box" />Passport's face, journey's
            grace, frame it tight, no space to chase.
          </div>
          <div class="${store.Global.selectedBrand} p" id="box4">
            <input type="checkbox" class="box" />Bites to savor, local flavor,
            snap your meal, a memory to treasure.
          </div>
          <div class="${store.Global.selectedBrand} p" id="box5">
            <input type="checkbox" class="box" />Hotel stance, a gateway change,
            shoot its welcome - glance by glance.
          </div>
          <div class="${store.Global.selectedBrand} p" id="box6">
            <input type="checkbox" class="box" />Dinner's served, calm unnerved,
            before sea's waves are braved and curved.
          </div>
          <div class="${store.Global.selectedBrand} p" id="box7">
            <input type="checkbox" class="box" />Sun's hello or sweet goodbye,
            catch its glow, where sea meets sky.
          </div>
        </div>
        <div class="${store.Global.selectedBrand} embarkation">
          <div class="${store.Global.selectedBrand} h2">Embarkation Day</div>
          <br />
          <div class="${store.Global.selectedBrand} p" id="box8">
            <input type="checkbox" class="box" />Ship in sight, a majestic view,
            take the pic, it's all brand new.
          </div>
          <div class="${store.Global.selectedBrand} p" id="box9">
            <input type="checkbox" class="box" />Terminal's buzz, vacation's
            chorus, snap the start of the travel story that's for us.
          </div>
          <div class="${store.Global.selectedBrand} p" id="box10">
            <input type="checkbox" class="box" />On the gangway, step the sway,
            a moment in steel, it's your get-away.
          </div>
          <div class="${store.Global.selectedBrand} p" id="box11">
            <input type="checkbox" class="box" />Muster station, safety's first
            creed, capture the spot, a vital read.
          </div>
          <div class="${store.Global.selectedBrand} p" id="box12">
            <input type="checkbox" class="box" />Cheers to the sea, with a
            Fun-ship drink, snap the toast, in one clink.
          </div>
          <div class="${store.Global.selectedBrand} p" id="box13">
            <input type="checkbox" class="box" />Lunch on board, a feast to
            score, take a shot before you explore.
          </div>
          <div class="${store.Global.selectedBrand} p" id="box14">
            <input type="checkbox" class="box" />Stateroom's door, open it wide,
            click your home on the tide.
          </div>
          <div class="${store.Global.selectedBrand} p" id="box15">
            <input type="checkbox" class="box" />Steward's greet, with a smile
            so grand, a picture with them, isn't it grand!
          </div>
          <div class="${store.Global.selectedBrand} p" id="box16">
            <input type="checkbox" class="box" />Dining guest, your table’s
            nest, find and capture where you’ll rest.
          </div>
          <div class="${store.Global.selectedBrand} p" id="box17">
            <input type="checkbox" class="box" />Show lounge bound, where
            entertainment’s found, snap its grandeur, all around.
          </div>
          <div class="${store.Global.selectedBrand} p" id="box18">
            <input type="checkbox" class="box" />Deck party’s roar, with the
            ocean’s floor, sail away memories galore.
          </div>
        </div>
        <div class="${store.Global.selectedBrand} sailing">
          <div class="${store.Global.selectedBrand} h2">While Sailing</div>
          <div class="${store.Global.selectedBrand} h3">
            Each moment's a trinket, a gem of the sea, tuck them in your camera,
            keepsakes to be.
          </div>
          <br />

          <div class="${store.Global.selectedBrand} p" id="box19">
            <input type="checkbox" class="box" />Brunch on days of high
            tides,savor the moments where true bliss abides.
          </div>
          <div class="${store.Global.selectedBrand} p" id="box20">
            <input type="checkbox" class="box" />In the lift, going aloft, snap
            that quick pic, soft and oft.
          </div>
          <div class="${store.Global.selectedBrand} p" id="box21">
            <input type="checkbox" class="box" />Ship’s path on a glowing
            screen, chart your travels, voyage unseen.
          </div>
          <div class="${store.Global.selectedBrand} p" id="box22">
            <input type="checkbox" class="box" />Poolside splash, a joyful beam,
            capture the fun, live the dream.
          </div>
          <div class="${store.Global.selectedBrand} p" id="box23">
            <input type="checkbox" class="box" />Balcony tales out in the
            breeze, on the deck – a shot with ease.
          </div>
          <div class="${store.Global.selectedBrand} p" id="box24">
            <input type="checkbox" class="box" />Smiling staff, service gleams,
            with waiter/waitresses – capture the scenes.
          </div>
          <div class="${store.Global.selectedBrand} p" id="box25">
            <input type="checkbox" class="box" />Casual dusk, dining ‘round, not
            dolled up, still profound.
          </div>
          <div class="${store.Global.selectedBrand} p" id="box26">
            <input type="checkbox" class="box" />Knock, knock, room service
            here, a picture to commemorate, year on year.
          </div>
          <div class="${store.Global.selectedBrand} p" id="box27">
            <input type="checkbox" class="box" />Test your palate, new cuisine,
            click the dish, examine the sheen.
          </div>
          <div class="${store.Global.selectedBrand} p" id="box28">
            <input type="checkbox" class="box" />Delight in sweets, a meal’s
            last wave, snap the dessert that you crave.
          </div>
          <div class="${store.Global.selectedBrand} p" id="box29">
            <input type="checkbox" class="box" />Towel creature, folded neat, a
            cabin friend – from head to feet.
          </div>
          <div class="${store.Global.selectedBrand} p" id="box30">
            <input type="checkbox" class="box" />Formal night, group’s finesse,
            suited up, in evening dress.
          </div>
          <div class="${store.Global.selectedBrand} p" id="box31">
            <input type="checkbox" class="box" />Waterslide antics, fun
            unfurled, capture the rush, down the twirled.
          </div>
          <div class="${store.Global.selectedBrand} p" id="box32">
            <input type="checkbox" class="box" />Lounger’s repose, serene,
            uncurled, a deck chair story that’s sun-spired.
          </div>
          <div class="${store.Global.selectedBrand} p" id="box33">
            <input type="checkbox" class="box" />Door décor of cabin’s port, a
            snapshot of your whimsical sort.
          </div>
          <div class="${store.Global.selectedBrand} p" id="box34">
            <input type="checkbox" class="box" />Favorite nook, aboard the ship,
            click its charm, make sure to snip.
          </div>
          <div class="${store.Global.selectedBrand} p" id="box35">
            <input type="checkbox" class="box" />Logo or name, ship’s proud
            badge, snap its mark, on your voyage.
          </div>
          <div class="${store.Global.selectedBrand} p" id="box36">
            <input type="checkbox" class="box" />Whale tail grand, a selfie’s
            tale, Carnival’s pride, big as a gale.
          </div>
          <div class="${store.Global.selectedBrand} p" id="box37">
            <input type="checkbox" class="box" />Carved artistry, fruity or
            chilled, snap the craft, skills thrived and skilled.
          </div>
          <div class="${store.Global.selectedBrand} p" id="box38">
            <input type="checkbox" class="box" />Miniature golf, a putt’s small
            flight, track its journey – snap the sight.
          </div>
          <div class="${store.Global.selectedBrand} p" id="box39">
            <input type="checkbox" class="box" />Coin of the ship, rare bounty’s
            find, capture this treasure, a maritime kind.
          </div>
          <div class="${store.Global.selectedBrand} p" id="box40">
            <input type="checkbox" class="box" />Cruise director’s smile,
            program in hand, snap away for a memory grand.
          </div>
          <div class="${store.Global.selectedBrand} p" id="box41">
            <input type="checkbox" class="box" />Captain’s helm, steady and
            sure, with them, a photo to endure.
          </div>
          <div class="${store.Global.selectedBrand} p" id="box42">
            <input type="checkbox" class="box" />Seuss on the loose, find the
            cat, Dr. Seuss character – click, that’s that!
          </div>
        </div>
        <div class="${store.Global.selectedBrand} ports">
          <div class="${store.Global.selectedBrand} h2">Port Stops</div>
          <div class="${store.Global.selectedBrand} h3">
            Port adventures a world anew, return with pictures for your at home
            crew!
          </div>
          <br />
          <div class="${store.Global.selectedBrand} p" id="box43">
            <input type="checkbox" class="box" />With Nassau’s landmark,
            standing proud, snap that sign amidst the crowd.
          </div>
          <div class="${store.Global.selectedBrand} p" id="box44">
            <input type="checkbox" class="box" />Princess Cays or Half Moon
            embrace, click that sign, a sunny space.
          </div>
          <div class="${store.Global.selectedBrand} p" id="box45">
            <input type="checkbox" class="box" />Ship behind, your face in
            front, selfie shot – a seafaring stunt.
          </div>
          <div class="${store.Global.selectedBrand} p" id="box46">
            <input type="checkbox" class="box" />Seashell’s edge, in your palm’s
            land, snap its spiral, delicate and grand.
          </div>
          <div class="${store.Global.selectedBrand} p" id="box47">
            <input type="checkbox" class="box" />Toes tucked in sandy seams,
            capture prints by ocean dreams.
          </div>
          <div class="${store.Global.selectedBrand} p" id="box48">
            <input type="checkbox" class="box" />Ships passing, a gentle nod,
            another liner, grand and broad.
          </div>
          <div class="${store.Global.selectedBrand} p" id="box49">
            <input type="checkbox" class="box" />Tender ride, bobbly blue, take
            a shot with a watery view.
          </div>
          <div class="${store.Global.selectedBrand} p" id="box50">
            <input type="checkbox" class="box" />Cab it or taxi queue, capture
            the ride, urban view.
          </div>
          <div class="${store.Global.selectedBrand} p" id="box51">
            <input type="checkbox" class="box" />Treasures hunted, keepsake
            spent, photo the souvenir, memory’s tent.
          </div>
          <div class="${store.Global.selectedBrand} p" id="box52">
            <input type="checkbox" class="box" />In the surf, an ocean’s tale,
            click while waves do and dip and sail.
          </div>
          <div class="${store.Global.selectedBrand} p" id="box53">
            <input type="checkbox" class="box" />Sandy towers, castle’s stake,
            capture the craft, before the break.
          </div>
          <div class="${store.Global.selectedBrand} p" id="box54">
            <input type="checkbox" class="box" />Beachside shade, umbrella’s
            post, snapshot the colors, your sun-kissed boast.
          </div>
          <div class="${store.Global.selectedBrand} p" id="box55">
            <input type="checkbox" class="box" />Vendor’s cart, streetside
            charm, capture the hustle, in your palm.
          </div>
          <div class="${store.Global.selectedBrand} p" id="box56">
            <input type="checkbox" class="box" />Underwater grin, a selfie’s
            swim, share that splash, on a whim.
          </div>
          <div class="${store.Global.selectedBrand} p" id="box57">
            <input type="checkbox" class="box" />Shoreline seen from deck’s wide
            span, a broad horizon to scan.
          </div>
          <div class="${store.Global.selectedBrand} p" id="box58">
            <input type="checkbox" class="box" />Topical bird, in flight’s
            array, capture its colors, before the fly away.
          </div>
        </div>
        <br />
      </div>
    </div>
  </main>
`;
