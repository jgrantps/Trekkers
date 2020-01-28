# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

DATA = {
  :series_keys => 
  ["title", "image_URL"], 
  :series =>[
  ["Star Trek: The Original Series", "https://hips.hearstapps.com/pop.h-cdn.co/assets/16/26/4000x2000/landscape-1467144815-starshipenterprise.jpg?resize=480:*"],
  ["Star Trek: The Next Generation", "https://vignette.wikia.nocookie.net/memoryalpha/images/0/00/USS_Enterprise-D%2C_TNG_Season_3-7.jpg/revision/latest?cb=20160203203647&path-prefix=en"],
  ["Star Trek: Deep Space Nine", "https://cdn1us.denofgeek.com/sites/denofgeekus/files/styles/main_wide/public/2018/01/star-trek-deep-space-nine.jpg?itok=YOt-ld3i"],
  ["Star Trek: Voyager", "https://vignette.wikia.nocookie.net/stexpanded/images/7/7b/Voyager-bottom.jpg/revision/latest?cb=20071211192033"]
],
:character_keys =>
["name", "description", "image_URL", "series_id"], 
:characters => [
    ["James T Kirk", "Captain of the USS Enterprise", "https://www.startrek.com/sites/default/files/styles/content_full/public/images/2019-07/89abe98de6071178edb1b28901a8f459.jpg?itok=UEwq0IRl", 1],
    ["Spock", "Chief Science Officer", "https://www.startrek.com/sites/default/files/styles/content_full/public/images/2019-07/8b10a9280bd46b8874af9b5cadec91d5.jpg?itok=3V9YqePf", 1],
    ["Leonard McCoy", "Chief Medical Officer", "https://www.startrek.com/sites/default/files/styles/content_full/public/images/2019-07/fe256faf97c200de0f7486ddf56c02f6.jpg?itok=ss-QBf0t", 1],
    ["Montgomery Scott", "Chief Engineer", "https://vignette.wikia.nocookie.net/memoryalpha/images/f/fa/Montgomery_Scott_aboard_the_Botany_Bay.jpg/revision/latest?cb=20140911214236&path-prefix=en", 1],
    ["Hikaru Sulu", "Helm Officer", "https://www.startrek.com/sites/default/files/styles/content_full/public/images/2019-07/f6a8dd1c954c8506aadc764cc32b895e.jpg?itok=l5_4d87m", 1],
    ["Pavel Chekov", "Navigations Officer", "https://vignette.wikia.nocookie.net/memoryalpha/images/b/b2/Pavel_Chekov%2C_2268.jpg/revision/latest?cb=20090225005414&path-prefix=en", 1],
    ["Nyota Uhura", "Communications Officer", "http://www.treknews.net/wp-content/uploads/2019/12/nichelle-nichols-star-trek-87-birthday-750x480.jpg", 1],
   
    ["Jean Luc Picard", "Capatain of the USS Enterprise-D", "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/star-trek-jean-luc-picard3-1547237309.jpg?crop=1xw:0.6574746008708273xh;center,top&resize=480:*", 2],
    ["William T Riker", "First Officer", "http://images2.fanpop.com/image/photos/9400000/Commander-William-T-Riker-star-trek-the-next-generation-9406645-1694-2560.jpg", 2],
    ["Data", "Chief Science Officer", "https://i.pinimg.com/originals/2d/89/23/2d892399223c7c408dbeea934de61be3.jpg", 2],
    ["Worf", "Chief Security Officer", "https://cnet4.cbsistatic.com/img/r-p-OqNgNZMOl62QZqWFWkgaQa0=/940x0/2016/09/02/41f02b67-d8ff-4179-8c32-a0f0c5bdfd7f/tng-worf00000993d.jpg", 2],
    ["Jordi LaForge", "Chief Engineer", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZUrJDa6443_39zp1hGsmrITrjRiEi5dTPxJnL97aRz5xJDIJs0g&s", 2],
    ["Deanna Troi", "Ships Councillor", "https://i.pinimg.com/originals/13/f2/e1/13f2e1e7a0ed888637f814267b7cf564.jpg", 2],
    ["Beverly Crusher", "Chief Medical Officer", "https://www.writeups.org/wp-content/uploads/Beverly-Crusher-Star-Trek-Gates-McFadden.jpg", 2],
    ["Wesley Crusher", "Acting Ensign", "https://hobbydb-production.s3.amazonaws.com/processed_uploads/subject_photo/subject_photo/image/31932/1507587172-22063-9513/61ebef12c1b5359984a7e4d77ae3a9d7--wesley-crusher-wil-wheaton_large.jpg", 2],

    ["Benjamin Sisko", "Commander of Station Deep Space Nine", "https://vignette.wikia.nocookie.net/p__/images/7/7b/Sisko_s3pb.jpg/revision/latest?cb=20190904150155&path-prefix=protagonist", 3],
    ["Kira Nerys", "First Officer", "https://www.universeguide.com/mobile/colkiranerys.jpg", 3],
    ["Odo", "Head Of Security", "https://www.startrek.com/sites/default/files/styles/1080x1080/public/images/2019-07/158f3069a435b314a80bdcb024f8e422.jpg?itok=jrB1E9XY", 3],
    ["Julian Bashir", "Chief Medical Officer", "https://www.startrek.com/sites/default/files/styles/content_full/public/images/2019-07/8169e05e2a0debcb15458f2cc1eff0ea.jpg?itok=ky6pVaX_", 3],
    ["Jadzia Dax", "Chief Science Officer", "https://upload.wikimedia.org/wikipedia/en/thumb/6/6c/JadziaDax.jpg/250px-JadziaDax.jpg", 3],
    ["Quark", "Barkeep", "https://i.pinimg.com/originals/d8/19/a7/d819a74d4f3492a165f9b285138b5e9e.jpg", 3],
    ["Miles O'Brien", "Chief Operations Officer", "https://vignette.wikia.nocookie.net/memoryalpha/images/d/de/Miles_O%27Brien%2C_2375.jpg/revision/latest?cb=20120329223424&path-prefix=en", 3],

    ["Kathryn Janeway", "Captain of the USS Voyager", "https://www.startrek.com/sites/default/files/styles/content_full/public/images/2019-07/4c22bd444899d3b6047a10b20a2f26db.jpg?itok=5Og5VCSC", 4],
    ["Chakotay", "First Officer", "https://upload.wikimedia.org/wikipedia/en/3/34/Chakotay.jpg", 4],
    ["B'Elanna Torres", "Chief Engineer", "https://www.syfy.com/sites/syfy/files/styles/1200x680/public/2017/11/belanna-torres.jpg", 4],
    ["The Doctor", "Chief Medical Officer", "https://cnet4.cbsistatic.com/img/S3e_wuAtjq_hlNt3MiYmLc-etqo=/644x0/2016/09/02/192847c9-3798-4dd3-bd2d-664aacb618cf/voydoctor2000-2001409.jpg", 4 ],
    ["Seven Of Nine", "Head Of Astrometrics", "https://www.chainimage.com/images/seven-of-nine-trekcore-star-trek-theme-galleries.jpg", 4],
    ["Tom Paris", "Helmsman", "https://a1cf74336522e87f135f-2f21ace9a6cf0052456644b80fa06d4f.ssl.cf2.rackcdn.com/images/characters_opt/p-Star-Trek-Voyager-Robert-Duncan-McNeill.jpg", 4],
    ["Tuvok", "Chief Of Security", "https://www.startrek.com/sites/default/files/styles/1080x1080/public/images/2019-07/4f16c818875d9fcb6867c7bdc89be7eb.jpg?itok=aQdBgtRJ", 4],
    ["Harry Kim", "Operations Officer", "https://upload.wikimedia.org/wikipedia/en/9/9a/Garrett_Wang_as_Harry_Kim.jpg", 4],
    ["Neelix", "Cook", "https://upload.wikimedia.org/wikipedia/en/f/fa/Neelix_%28Star_Trek_Voyager%29.jpg", 4]
]
}

def seed_data
    make_series
    make_characters
end
 
def make_series
    DATA[:series].each do |serie|
        new_series = Series.new(:title => serie[0], :image_URL => serie[1])
        new_series.save
    end
end

def make_characters
    DATA[:characters].each do |character|
        # "name", "description", "image_URL", "series_id"
        new_character = Character.new(:name => character[0], :description => character[1], :image_URL => character[2], :series_id => character[3])
        new_character.save
    end
end

seed_data
